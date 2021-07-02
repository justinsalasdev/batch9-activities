import { db } from "../../firebase/firebase";

export default function addBudget(budget, account, category) {
  return new Promise(async (resolve, reject) => {
    try {
      const accountDocRef = db.collection("Accounts").doc(account);
      const budgetRef = accountDocRef.collection(category).doc();

      await budgetRef.set(budget);
      resolve();
    } catch (err) {
      console.log(err);
      reject({ custom: "failed to add budget" });
    }
  });
}
