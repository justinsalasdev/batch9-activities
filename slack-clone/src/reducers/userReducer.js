const initialState = {
  photoURL: "",
  email: "",
  uid: "",
  displayName: ""
};

export default function authReducer(state, action) {
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

    case "delete user": {
      return initialState;
    }

    default: {
      console.log("auth-reducer: unknown action");
    }
  }
}
