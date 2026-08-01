import {
  IllegalTransitionError,
  StateDefinition,
  StateRegistry,
  UnknownStateError,
  WorkflowState
} from "./contract.js";

export class StateMachine {
  constructor(private readonly registry: StateRegistry) {}

  getDefinition(state: WorkflowState): StateDefinition {
    const definition = this.registry.states.get(state);
    if (!definition) {
      throw new UnknownStateError(state);
    }
    return definition;
  }

  assertLegalTransition(from: WorkflowState, to: WorkflowState): void {
    const definition = this.getDefinition(from);
    // getDefinition also validates that `to` is a real state before checking reachability,
    // so an illegal transition to an unknown state fails as UnknownStateError, not a silent pass.
    this.getDefinition(to);
    if (!definition.transitions.includes(to)) {
      throw new IllegalTransitionError(from, to);
    }
  }

  get stateCount(): number {
    return this.registry.states.size;
  }

  get mvpStopState(): WorkflowState {
    return this.registry.mvpStopState;
  }
}
