import { db } from "../../firebase/firebase";

export default function getBudget(account) {
  return new Promise(async (resolve, reject) => {
    try {
      const accountDocRef = db.collection("Accounts").doc(account);
      const budgetColRef = accountDocRef
        .collection("Budget")
        .orderBy("date", "desc");

      const budget = [];

      const budgetSnapshot = await budgetColRef.get();
      budgetSnapshot.forEach(budgetDoc => {
        if (budgetDoc.id !== "watchedDoc") {
          budget.push({ id: budgetDoc.id, ...budgetDoc.data() });
        }
      });

      // budgetColRef.onSnapshot(budgetSnapshot => {
      //   budgetSnapshot.forEach(budgetDoc => {
      //     if (budgetDoc.id !== "watchedDoc") {
      //       budget.push({ id: budgetDoc.id, ...budgetDoc.data() });
      //     }
      //   });
      // });

      resolve(budget);
    } catch (err) {
      console.log(err);
      reject({ custom: "failed to get budget" });
    }
  });
}

/*db.collection("cities").where("state", "==", "CA")
    .onSnapshot((querySnapshot) => {
        var cities = [];
        querySnapshot.forEach((doc) => {
            cities.push(doc.data().name);
        });
        console.log("Current cities in CA: ", cities.join(", "));
    }); */
