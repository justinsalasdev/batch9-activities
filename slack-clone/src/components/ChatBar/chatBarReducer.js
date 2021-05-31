export default function chatBarReducer(state, action) {
  switch (action.type) {
    case "set content":
      return { ...state, content: action.payload };
    case "finish sending":
      return { ...state, content: "", isLoading: false };
    case "start sending":
      return { ...state, isLoading: true };
    default:
      console.log("cb unknown action");
      return { ...state };
  }
}
