import { db } from "../../firebase/firebase";
export default function getAccount(userId) {
  return new Promise(async (resolve, reject) => {
    console.log("account get runs");
    try {
      const accountsSnapshot = await db
        .collection("Accounts")
        .where("owner", "==", userId)
        .get();

      const accounts = [];
      accountsSnapshot.forEach(accountDoc =>
        accounts.push({ account: accountDoc.id, ...accountDoc.data() })
      );
      resolve(accounts[0]); // {account as account uid, active, balance, name, owner as uid}
    } catch (err) {
      console.log(err);
      reject({ custom: "User not found" });
    }
  });
}
