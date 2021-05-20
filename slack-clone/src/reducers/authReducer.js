//state{user: null}

export default function authReducer(state, action) {
  switch (action.type) {
    case "save user": {
      return { ...state, user: { ...action.payload }, error: null };
    }

    case "update photo": {
      return {
        ...state,
        user: {
          ...state.user,
          photoURL: action.payload
        }
      };
    }

    case "delete user": {
      return { ...state, user: null, error: null };
    }

    case "error": {
      return { ...state, error: { ...action.payload } };
    }
    default: {
      console.log("auth-reducer: unknown action");
    }
  }
}
