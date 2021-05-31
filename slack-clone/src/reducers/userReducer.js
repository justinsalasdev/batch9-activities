const initialState = {
  photoURL: "",
  email: "",
  uid: "",
  displayName: "",
  error: null
};

export default function userReducer(state, action) {
  switch (action.type) {
    case "save user": {
      return { ...state, ...action.payload };
    }

    case "update photo": {
      return {
        ...state,
        photoURL: action.payload
      };
    }

    case "update name": {
      return {
        ...state,
        displayName: action.payload
      };
    }

    case "error": {
      //dispatch action when there's an error in updating state
      return {
        ...state,
        error: true
      };
    }

    //clear error when error handler is ran
    case "clear error": {
      return {
        ...state,
        error: null
      };
    }

    case "delete user": {
      return initialState;
    }

    default: {
      console.log("user-reducer: unknown action");
      return { ...state };
    }
  }
}
