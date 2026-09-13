const initialState = { count: 0 };

export default function countReducer(state = initialState, action) {
  switch (action.type) {
    case "count/increment":
      return { ...state, count: state.count + action.payload };
    case "count/decrement":
      return { ...state, count: state.count - action.payload };
    case "count/reset":
      return initialState;
    default:
      return state;
  }
}
