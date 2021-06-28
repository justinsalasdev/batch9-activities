import { auth } from "../../firebase/firebase";
export default async function authenticate(formData) {
  return new Promise((resolve, reject) => {
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
      if (err.message) {
        reject({ custom: error.message });
      }
      reject("Error authenticating");
    }
  });
}
