export default function selectorReducer(state, action) {
  switch (action.type) {
    case "set field":
      return { ...state, fieldValue: action.payload };
    case "focus":
      return { ...state, isFocused: true };
    case "unfocus":
      return { ...state, isFocused: false };

    default:
      console.log("unknown selector action");
  }
}
