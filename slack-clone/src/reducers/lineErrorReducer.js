export default function lineErrorReducer(state, action) {
  switch (action.type) {
    case "update":
      return { ...state, value: action.payload, errorMessage: "", isDirty: true };
    case "error":
      return { ...state, errorMessage: action.payload };

    case "touch":
      return { ...state, isDirty: true };

    default:
      console.log("unknown action");
  }
}
