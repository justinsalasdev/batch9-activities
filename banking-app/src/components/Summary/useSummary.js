import { useEffect, useReducer } from "react";
import { db } from "../../firebase/firebase";
import formatDate from "../../helpers/formatDate";
import getDeadline from "../../helpers/getDeadline";
import reduceBudget from "../../helpers/reduceBudget";
import { useUserState } from "../../managers/userManager";

//type
export default function useSummary() {
  const { account } = useUserState();
  const [state, dispatch] = useReducer(reducer, {
    isLoading: false,
    summary: null,
    error: null
  });

  useEffect(() => {
    (async () => {
      try {
        const accountDocRef = db.collection("Accounts").doc(account.account);
        const duesColRef = accountDocRef
          .collection("Dues")
          .orderBy("date", "desc");
        const incomeColRef = accountDocRef
          .collection("Income")
          .orderBy("date", "desc");

        dispatch({ type: "start" });

        const income = [];
        const dues = [];
        const duesSnapshot = await duesColRef.get();
        const incomeSnapshot = await incomeColRef.get();

        duesSnapshot.forEach(dueDoc => {
          const { date, frequency } = dueDoc.data();
          dues.push({
            id: dueDoc.id,
            ...dueDoc.data(),
            next: new Date(getDeadline(date, frequency))
          });
        });
        incomeSnapshot.forEach(incomeDoc => {
          const { date, frequency } = incomeDoc.data();
          income.push({
            id: incomeDoc.id,
            ...incomeDoc.data(),
            next: new Date(getDeadline(date, frequency))
          });
        });

        const summary = getSummary(dues, income, account.balance);

        dispatch({ type: "done", payload: summary });
      } catch (err) {
        dispatch({ type: "error", payload: "failed to get resources" });
      }
    })();

    // eslint-disable-next-line
  }, []);

  return {
    isLoading: state.isLoading,
    resources: state.resources,
    error: state.error,
    cutOff: formatDate(getBoundary()[1]),
    summary: state?.summary || 0
  };
}

function reducer(state, action) {
  switch (action.type) {
    case "start":
      return { ...state, isLoading: true, error: null };
    case "done":
      return { ...state, isLoading: false, summary: action.payload };
    case "error":
      return { ...state, isLoading: false, error: action.payload };

    default:
      console.log("unknown summary action");
      return state;
  }
}

function getBoundary() {
  const currentDate = new Date();
  const dayNum = currentDate.getDate();
  const monthNum = currentDate.getMonth() + 1;
  const yearNum = currentDate.getFullYear();
  const maxDays = new Date(yearNum, monthNum, 0).getDate();

  if (dayNum <= 15) {
    return [
      new Date(`${monthNum}/${1}/${yearNum}`),
      new Date(`${monthNum}/${15}/${yearNum}`)
    ];
  } else {
    return [
      new Date(`${monthNum}/${15}/${yearNum}`),
      new Date(`${monthNum}/${maxDays}/${yearNum}`)
    ];
  }
}

function getSummary(dues, income, balance) {
  const dateBoundary = getBoundary();

  const totalDues = reduceBudget(dateBoundary, dues);
  const totalIncome = reduceBudget(dateBoundary, income);
  console.log(totalDues, totalIncome, balance);

  return totalIncome + balance - totalDues;
}
