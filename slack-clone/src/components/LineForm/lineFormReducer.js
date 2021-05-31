export default function lineFormReducer(state, action) {
  switch (action.type) {
    case "set value":
      return { ...state, value: action.payload };
    case "start submit":
      return { ...state, isLoading: true };

    case "end submit": {
      return { ...state, isLoading: false };
    }

    case "submit error": {
      return { ...state, isLoading: false, value: action.payload };
    }

    default:
      console.log("unknown lineForm action");
      return { ...state };
  }
}
