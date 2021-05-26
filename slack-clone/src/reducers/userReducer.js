const initialState = {
  photoURL: "",
  email: "",
  uid: "",
  displayName: ""
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

    case "delete user": {
      return initialState;
    }

    default: {
      console.log("user-reducer: unknown action");
    }
  }
}
