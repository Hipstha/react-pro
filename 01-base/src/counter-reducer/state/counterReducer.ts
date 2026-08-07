import { ACTION } from "../actions/actions";
import type { CounterAction } from "../actions/actions";
import type { CounterState } from "../interfaces/interfaces";

export const counterReducer = ( state: CounterState, action: CounterAction): CounterState => {

  const { counter, changes } = state;
  switch (action.type) {
    case ACTION.reset:
      return {
        changes: 0,
        counter: 0,
        previous: 0,
      }
    case ACTION.increase:
      return {
        changes: changes + 1,
        counter: counter + action.payload.value,
        previous: counter
      }
    default:
      return state;
  }
}