export default function shoutsReducer(state, action) {
  switch (action.type) {
    case "save shouts": {
      return { ...state, messages: action.payload };
    }

    default: {
      console.log("shouts-reducer: unknown action");
      return { ...state };
    }
  }
}
