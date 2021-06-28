import { db } from "../../firebase/firebase";
export default async function getHistory(account) {
  return new Promise(async (resolve, reject) => {
    try {
      const history = [];
      const historySnaphot = await db
        .collection("Accounts")
        .doc(account)
        .collection("History")
        .orderBy("timeStamp", "desc")
        .limit(5)
        .get();

      historySnaphot.forEach(historyDoc =>
        history.push({
          id: historyDoc.id,
          ...historyDoc.data(),
          timeStamp: historyDoc.data().timeStamp.toDate()
        })
      );

      resolve(history); //[array of history]
    } catch (err) {
      console.log(err);
      reject({ custom: "Failed to get history" });
    }
  });
}
