import { auth, db } from "../../firebase/firebase";
export default function changePw(formData, account) {
  return new Promise(async (resolve, reject) => {
    const user = auth.currentUser;
    const accountRef = db.collection("Accounts").doc(account);
    try {
      await user.updatePassword(formData.password);
      await accountRef.update({ active: true });

      resolve("Password success");
    } catch (err) {
      console.log(err);
      reject(err?.message || "Failed to login");
    }
  });
}
