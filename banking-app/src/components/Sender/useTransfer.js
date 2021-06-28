//start
import isClean from "../../helpers/validation/isClean";
import { useReducer } from "react";
import reducer from "./reducer";
import transfer from "../../helpers/account/transfer";

export default function useTransfer(formData, formErrors, account, oldBalance) {
  const [state, dispatch] = useReducer(reducer, {
    error: null,
    isLoading: false
  });

  async function handleSubmit(e) {
    e.preventDefault();
    const { balance, account: destination } = formData;
    const amount = Number(balance);

    if (destination === account) {
      dispatch({ type: "error", payload: "can't transfer to own account" });
      return;
    }

    if (amount > oldBalance) {
      dispatch({ type: "error", payload: "not enough balance" });
      return;
    }

    if (amount < 100) {
      dispatch({ type: "error", payload: "minimum transfer is B100" });
      return;
    }

    if (isClean(formErrors)) {
      try {
        dispatch({ type: "start" });
        await transfer(account, destination, amount);
        dispatch({ type: "done" });
      } catch (err) {
        dispatch({
          type: "error",
          payload: err?.custom || err
        });
      }
    } else {
      return;
    }
  }

  return { isLoading: state.isLoading, error: state.error, handleSubmit };
}
