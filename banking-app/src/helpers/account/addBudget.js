import { db } from "../../firebase/firebase";
import generateString from "../generateString";

export default function addBudget(budget, account) {
  return new Promise(async (resolve, reject) => {
    try {
      const accountDocRef = db.collection("Accounts").doc(account);
      const budgetColRef = accountDocRef.collection("Budget");

      const budgetDocRef = budgetColRef.doc();
      const watcherRef = budgetColRef.doc("watchedDoc");

      const batch = db.batch();
      batch.set(budgetDocRef, budget);
      batch.set(watcherRef, { watchedString: generateString() });
      await batch.commit();
      resolve();
    } catch (err) {
      console.log(err);
      reject({ custom: "failed to add budget" });
    }
  });
}
