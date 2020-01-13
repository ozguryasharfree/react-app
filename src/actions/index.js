export const increment = () => ({
  type: 'INCREMENT'
});

export const decrement = () => ({
  type: 'DECREMENT'
});

export const setNumber = () => ({
  type: 'SET_NUMBER'
});

export const setNumberChange = (number) =>({
  type: 'SET_NUMBER_CHANGE',
  number
});
