export default function lettersReducer(state, action) {
  switch (action.type) {
    case "save letters": {
      return { ...state, letters: action.payload };
    }

    case "create": {
      return { ...state, isCreated: true };
    }

    default: {
      console.log("letters-reducer: unknown action");
      return { ...state };
    }
  }
}
