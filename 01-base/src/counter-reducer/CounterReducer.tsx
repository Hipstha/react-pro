import { useReducer } from "react";
import type { CounterState } from "./interfaces/interfaces";
import { counterReducer } from "./state/counterReducer";
import { doIncreseBy, doReset } from "./actions/actions";

const INITIAL_STATE: CounterState = {
  changes: 0,
  counter: 0,
  previous: 0,
}

export const CounterReducerComponent = () => {

  const [ counterState, dispatch ] = useReducer(counterReducer, INITIAL_STATE)

  const handleReset = () => {
    dispatch( doReset() );
  }

  const increaseBy = ( value: number ) => {
    dispatch( doIncreseBy( value ) );
  }
 
  return (
    <>
      <h1>Counter reducer segmentado</h1>
      <pre>
        { JSON.stringify(counterState, null, 2)}
      </pre>
      <button onClick={ () => increaseBy(1) }>
        +1
      </button>
      <button onClick={ () => increaseBy(5) }>
        +5
      </button>
      <button onClick={ () => increaseBy(10) }>
        +10
      </button>
      <button onClick={ handleReset }>
        Reset
      </button>
    </>
  )
}