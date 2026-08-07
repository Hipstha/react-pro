
export const ACTION = {
  reset: 'reset',
  increase: 'doIncreseBy'
} as const

export type CounterAction =
  | { type: typeof ACTION.increase, payload: { value: number; }}
  | { type: typeof ACTION.reset };

export const doReset = (): CounterAction => ({
  type: ACTION.reset
})

export const doIncreseBy = (value: number): CounterAction => ({
  type: ACTION.increase,
  payload: {
    value
  }
})