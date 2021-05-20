//state{user: null}

export default function authReducer(state, action) {
  switch (action.type) {
    case "save user": {
      return { ...state, user: { ...action.payload }, error: null };
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
