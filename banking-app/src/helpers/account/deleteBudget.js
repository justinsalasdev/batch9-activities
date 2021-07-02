import { db } from "../../firebase/firebase";

export default function deleteBudget(account, budgetId, category) {
  return new Promise(async (resolve, reject) => {
    try {
      const accountDocRef = db.collection("Accounts").doc(account);
      const budgetRef = accountDocRef.collection(category).doc(budgetId);
      await budgetRef.delete();
      resolve();
    } catch (err) {
      console.log(err);
      reject({ custom: "failed to delete budget" });
    }
  });
}
