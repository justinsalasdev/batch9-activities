export default function validationReducer(state, action) {
  switch (action.type) {
    case "blank": {
      return { ...state, errorMessage: "is required" };
    }
    case "invalid": {
      return { ...state, errorMessage: "is invalid" };
    }
    case "short": {
      return { ...state, errorMessage: action.payload };
    }
  }
}
