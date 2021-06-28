export default function reducer(state, action) {
  switch (action.type) {
    case "start":
      return { ...state, isLoading: true, error: null };
    case "error":
      return { ...state, isLoading: false, error: action.payload };
    case "done":
      return { ...state, isLoading: false };
    default:
      console.log("unknown sender action");
      return state;
  }
}
