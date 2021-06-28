import isClean from "../../helpers/validation/isClean";
import { useReducer } from "react";
import { useUserDispatcher, useUserState } from "../../managers/userManager";
import changePw from "../../helpers/auth/changePw";
import { useHistory } from "react-router-dom";

export default function useChange(formData, formErrors) {
  const navigator = useHistory();
  const userDispatch = useUserDispatcher();
  const [state, dispatch] = useReducer(reducer, {
    error: null,
    isLoading: false
  });
  const { account } = useUserState();

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      if (isClean(formErrors)) {
        dispatch({ type: "start" });
        await changePw(formData, account.account);
        dispatch({ type: "done" });
        userDispatch({ type: "make active" });
        navigator.push("/");
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
      console.log("uknown change-pw action");
      return state;
  }
}
