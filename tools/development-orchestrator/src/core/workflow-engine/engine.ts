import { AuditLog } from "../audit/audit-log.js";
import { StateMachine } from "../state-machine/state-machine.js";
import { StateHandlerNotImplementedError, WorkflowState } from "../state-machine/contract.js";

export interface StateHandlerResult {
  readonly next: WorkflowState;
  readonly event: string;
}

export type StateHandler<Ctx> = (ctx: Ctx) => Promise<StateHandlerResult> | StateHandlerResult;

/** Terminal handler for the MVP stop state — performs final bookkeeping, returns nothing. */
export type StopHandler<Ctx> = (ctx: Ctx) => Promise<void> | void;

export interface WorkflowRunResult {
  readonly finalState: WorkflowState;
}

export class WorkflowEngine<Ctx> {
  private readonly handlers = new Map<WorkflowState, StateHandler<Ctx>>();
  private stopHandler: StopHandler<Ctx> | undefined;

  constructor(
    private readonly stateMachine: StateMachine,
    private readonly audit: AuditLog
  ) {}

  register(state: WorkflowState, handler: StateHandler<Ctx>): void {
    this.handlers.set(state, handler);
  }

  registerStopHandler(handler: StopHandler<Ctx>): void {
    this.stopHandler = handler;
  }

  async run(startState: WorkflowState, ctx: Ctx): Promise<WorkflowRunResult> {
    const stopState = this.stateMachine.mvpStopState;
    let current = startState;

    while (true) {
      // Validates `current` is a real registry entry before anything else.
      this.stateMachine.getDefinition(current);

      if (current === stopState) {
        this.audit.append({ event_type: "STATE_ENTER", state: current });
        if (this.stopHandler) {
          await this.stopHandler(ctx);
        }
        this.audit.append({ event_type: "RUN_STOPPED_AT_MVP_BOUNDARY", state: current });
        return { finalState: current };
      }

      const handler = this.handlers.get(current);
      if (!handler) {
        this.audit.append({ event_type: "STATE_HANDLER_NOT_IMPLEMENTED", state: current });
        throw new StateHandlerNotImplementedError(current);
      }

      this.audit.append({ event_type: "STATE_ENTER", state: current });
      const result = await handler(ctx);
      this.audit.append({ event_type: "STATE_EXIT", state: current, detail: { event: result.event, next: result.next } });

      this.stateMachine.assertLegalTransition(current, result.next);
      current = result.next;
    }
  }
}
