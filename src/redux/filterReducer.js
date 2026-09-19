const initialFilter = { filter: "" };

export default function filterReducer(state = initialFilter, action) {
  switch (action.type) {
    case "filter/changeValue":
      return { filter: action.payload };
    default:
      return state;
  }
}
