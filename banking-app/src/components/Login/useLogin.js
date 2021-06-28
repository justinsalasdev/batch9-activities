import isClean from "../../helpers/validation/isClean";
import { useReducer } from "react";
import authenticate from "../../helpers/auth/authenticate";
import { useUserDispatcher } from "../../managers/userManager";

export default function useLogin(formData, formErrors) {
  const [state, dispatch] = useReducer(reducer, {
    error: null,
    isLoading: false
  });
  const userDispatch = useUserDispatcher();

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      if (isClean(formErrors)) {
        dispatch({ type: "start" });
        await authenticate(formData);
        dispatch({ type: "done" });
        userDispatch({ type: "start" });
      } else {
        return;
      }
    } catch (err) {
      console.log(err);
      dispatch({ type: "error", payload: err?.custom || err });
    }
  }
  return { error: state.error, isLoading: state.isLoading, handleSubmit };
}

function reducer(state, action) {
  switch (action.type) {
    case "start":
      return { ...state, isLoading: true, error: null };
    case "done":
      return { ...state, isLoading: false };
    case "error":
      return { ...state, isLoading: false, error: action.payload };

    default:
      console.log("uknown login action");
      return state;
  }
}
