export default function selectorReducer(state, action) {
  switch (action.type) {
    case "set field":
      return { ...state, fieldValue: action.payload };

    default:
      console.log("unknown selector action");
  }
}
