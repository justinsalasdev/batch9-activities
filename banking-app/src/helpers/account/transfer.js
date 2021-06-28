import { db, FieldValue } from "../../firebase/firebase";

export default function transfer(account, destination, amount) {
  return new Promise(async (resolve, reject) => {
    try {
      const accountsRef = db.collection("Accounts");
      const accountRef = accountsRef.doc(account);
      const accountHistoryRef = accountRef.collection("History").doc();
      const destinationRef = accountsRef.doc(destination);
      const destinationHistoryRef = destinationRef.collection("History").doc();

      await db.runTransaction(async transactor => {
        try {
          const accountDoc = await transactor.get(accountRef); //guaranteed to exists
          const accountBalance = accountDoc.data().balance;

          const destinationDoc = await transactor.get(destinationRef);
          if (!destinationDoc.exists) {
            reject({ custom: "destination account does not exist" });
          }
          const destinationBalance = destinationDoc.data().balance;

          //dynamically create account ref
          transactor
            .update(accountRef, {
              balance: accountBalance - amount
            })
            .update(destinationRef, {
              balance: destinationBalance + amount
            })
            .set(accountHistoryRef, {
              runningBalance: accountBalance - amount,
              to: destination,
              amount: -amount,
              timeStamp: FieldValue.serverTimestamp(),
              type: "transfer"
            })
            .set(destinationHistoryRef, {
              runningBalance: destinationBalance + amount,
              from: account,
              amount,
              timeStamp: FieldValue.serverTimestamp(),
              type: "received"
            });

          resolve();
        } catch (err) {
          console.log(err);
          reject("money transfer failed");
        }
      });
    } catch (err) {
      console.log(err);
      reject("unknown transfer error occured");
    }
  });
}
