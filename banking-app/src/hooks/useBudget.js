import { useEffect, useReducer, useState } from "react";
import { db } from "../firebase/firebase";
import deleteBudget from "../helpers/account/deleteBudget";
import { useUserState } from "../managers/userManager";

//type
export default function useBudget(category) {
  const [isStarted, setStarted] = useState(false);
  const [isDeleting, setDeleting] = useState(false);
  const { account } = useUserState();
  const [state, dispatch] = useReducer(reducer, {
    isLoading: false,
    budget: [],
    error: null
  });

  useEffect(() => {
    const accountDocRef = db.collection("Accounts").doc(account.account);
    const budgetColRef = accountDocRef
      .collection(category)
      .orderBy("date", "desc");

    dispatch({ type: "start" });

    var unsubscribe = budgetColRef.onSnapshot(
      budgetSnapshot => {
        const budget = [];
        budgetSnapshot.forEach(budgetDoc => {
          budget.push({ id: budgetDoc.id, ...budgetDoc.data() });
        });
        dispatch({ type: "done", payload: budget });
      },
      err => {
        console.log(err);
        dispatch({ type: "error", payload: "failed to get budget" });
      }
    );

    return function () {
      unsubscribe();
    };

    // eslint-disable-next-line
  }, []);

  function handleDelete(id) {
    return async function () {
      setDeleting(true);
      await deleteBudget(account.account, id, category);
      setDeleting(false);
    };
  }

  return {
    isLoading: state.isLoading,
    budget: state.budget,
    error: state.error,
    isStarted,
    toggleForm: () => setStarted(state => !state),
    handleDelete,
    isDeleting
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

    default:
      console.log("unknown budget action");
      return state;
  }
}
