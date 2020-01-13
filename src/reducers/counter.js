const initialState = {
  count: 0,
  numberSetted: 0,
  timesClicked: 0
};

function counterReducer(state = initialState, action) {
  switch (action.type) {
    case "INCREMENT":
      return {
        ...state,
        count: state.count + 1,
        timesClicked: state.timesClicked + 1
      };
    case "DECREMENT":
      return {
        ...state,
        count: state.count - 1,
        timesClicked: state.timesClicked + 1
      };

    case "SET_NUMBER_CHANGE":
      return {
        ...state,
        numberSetted: action.number
      };
    case "SET_NUMBER":
      return {
        ...state,
        count: parseInt(state.numberSetted),
        numberSetted: null
      };

    default:
      return state;
  }
}

export default counterReducer;
