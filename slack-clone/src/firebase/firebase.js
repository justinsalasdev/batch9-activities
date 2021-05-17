import firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAzQhRKT9UhKG-ArC5-p8uNCVELWQXM7Yc",
  authDomain: "slack-clone-c2d0b.firebaseapp.com",
  projectId: "slack-clone-c2d0b",
  storageBucket: "slack-clone-c2d0b.appspot.com",
  messagingSenderId: "668223952571",
  appId: "1:668223952571:web:7397301c829bd2c6347b9e"
};

firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();
const auth = firebase.auth();
// const db = firebase.firestore();

export { auth, storage, firebase as default };
