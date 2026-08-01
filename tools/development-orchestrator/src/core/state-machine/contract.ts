export type WorkflowState = string;
export type StateCategory = "normal" | "approval" | "recovery" | "terminal";

export interface StateDefinition {
  readonly id: WorkflowState;
  readonly category: StateCategory;
  readonly implemented: boolean;
  readonly transitions: readonly WorkflowState[];
}

export interface StateRegistry {
  readonly states: ReadonlyMap<WorkflowState, StateDefinition>;
  readonly mvpStopState: WorkflowState;
}

export class UnknownStateError extends Error {
  constructor(public readonly state: WorkflowState) {
    super(`UNKNOWN_STATE: '${state}' is not part of the canonical state registry`);
    this.name = "UnknownStateError";
  }
}

export class IllegalTransitionError extends Error {
  constructor(
    public readonly from: WorkflowState,
    public readonly to: WorkflowState
  ) {
    super(`ILLEGAL_TRANSITION: '${from}' -> '${to}' is not declared in the state registry`);
    this.name = "IllegalTransitionError";
  }
}

export class StateHandlerNotImplementedError extends Error {
  constructor(public readonly state: WorkflowState) {
    super(`STATE_HANDLER_NOT_IMPLEMENTED: ${state}`);
    this.name = "StateHandlerNotImplementedError";
  }
}
