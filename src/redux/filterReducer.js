const initialFilter = { filter: "" };

export default function filterReducer(state = initialFilter, action) {
  switch (action.type) {
    case "filter/changeValue":
      return { ...state, filter: action.payload };
    default:
      return state;
  }
}
