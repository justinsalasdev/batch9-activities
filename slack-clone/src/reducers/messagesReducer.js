export default function messagesReducer(state, action) {
  switch (action.type) {
    case "save messages": {
      return { ...state, messages: action.payload };
    }

    case "create": {
      return { ...state, isCreated: true };
    }

    default: {
      console.log("people-reducer: unknown action");
      return { ...state };
    }
  }
}
