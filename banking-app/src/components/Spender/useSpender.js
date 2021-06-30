import useForm from "../../hooks/useForm";
import isClean from "../../helpers/validation/isClean";
import { useReducer } from "react";
import { useUserState } from "../../managers/userManager";
import addBudget from "../../helpers/account/addBudget";
export default function useSpender() {
  const userState = useUserState();
  const [formData, formErrors] = useForm();
  const [state, dispatch] = useReducer(reducer, {
    error: null,
    isLoading: false
  });

  async function handleSubmit(e) {
    e.preventDefault();
    if (isClean(formErrors)) {
      try {
        dispatch({ type: "start" });
        await addBudget(formData, userState.account.account);
        dispatch({ type: "done" });
      } catch (err) {
        console.log(err);
        dispatch({ type: "error", payload: err?.custom || err });
      }
    } else {
      return;
    }
  }

  return { formData, formErrors, handleSubmit, isLoading: state.isLoading };
}

function reducer(state, action) {
  switch (action.type) {
    case "start": {
      return { ...state, isLoading: true, error: null };
    }

    case "done": {
      return { ...state, isLoading: false };
    }

    case "error": {
      return { ...state, isLoading: false, error: action.payload };
    }
  }
}
