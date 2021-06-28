import { db } from "../../firebase/firebase";
export default async function getAccount(userId) {
  return new Promise(async (resolve, reject) => {
    try {
      const accountsSnapshot = await db
        .collection("Accounts")
        .where("owner", "==", userId)
        .get();

      const accounts = [];
      accountsSnapshot.forEach(accountDoc =>
        users.push({ account: accountDoc.id, ...accountDoc.data() })
      );
      resolve(accounts[0]); // {account as account uid, active, balance, name, owner as uid}
    } catch (err) {
      console.log(err);
      reject({ custom: "User not found" });
    }
  });
}
