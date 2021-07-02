import { useEffect, useReducer, useState } from "react";
import getBudget from "../../helpers/account/getBudget";
import { useUserState } from "../../managers/userManager";

export default function useDues() {
  const [isStarted, setStarted] = useState(false);
  const { account } = useUserState();
  const [state, dispatch] = useReducer(reducer, {
    isLoading: false,
    budget: [],
    error: null
  });

  useEffect(() => {
    (async () => {
      try {
        dispatch({ type: "start" });
        const budget = await getBudget(account.account);
        dispatch({ type: "done", payload: budget });
      } catch (err) {
        console.log(err);
        dispatch({ type: "error", payload: err?.custom || err });
      }
    })();
    // eslint-disable-next-line
  }, []);

  return {
    isLoading: state.isLoading,
    budget: state.budget,
    error: state.error,
    isStarted,
    toggleForm: () => setStarted(state => !state)
  };
}

function reducer(state, action) {
  switch (action.type) {
    case "start":
      return { ...state, isLoading: true, error: null };
    case "done":
      return { ...state, isLoading: false, budget: action.payload };
    case "error":
      return { ...state, isLoading: false, error: action.payload };
  }
}
