import { auth } from "../../firebase/firebase";
export default function authenticate(formData) {
  return new Promise(async (resolve, reject) => {
    try {
      const {
        user: { uid }
      } = await auth.signInWithEmailAndPassword(
        formData.email,
        formData.password
      );
      resolve(uid);
    } catch (err) {
      console.log(err);
      reject(err?.message || "Failed to login");
    }
  });
}
