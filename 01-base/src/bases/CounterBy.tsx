import { useState } from "react";

interface CounterProps {
  initialValue?: number;
}

type CounterStateType = {
  counter: number;
  clicks: number;
}

export const CounterBy = ( {initialValue = 5}: CounterProps ) => {

  const [ { counter, clicks }, setCounterState ] = useState<CounterStateType>({
    counter: initialValue,
    clicks: 0,
  });

  const handleClick = (value: number) => {
    setCounterState( ({ clicks, counter }) => ({
      counter: counter + value,
      clicks: clicks + 1
    }) )
  }

  return (
    <>
      <h1>CounterBy: { counter }</h1>
      <h1>Click: { clicks }</h1>

      <button onClick={ () => handleClick(1) }>+1</button>
      <hr/>
      <button onClick={ () => handleClick(5) }>+5</button>
    </>
  )
}