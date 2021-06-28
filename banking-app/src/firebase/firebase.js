import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBMz6dQ-8Ih7TF88x8_uOswKwz_xx9WRNM",
  authDomain: "banking-app-2782b.firebaseapp.com",
  projectId: "banking-app-2782b",
  storageBucket: "banking-app-2782b.appspot.com",
  messagingSenderId: "826635141255",
  appId: "1:826635141255:web:37f13b8d400fad9b2f3822"
};

firebase.initializeApp(firebaseConfig);
const FieldValue = firebase.firestore.FieldValue;
const db = firebase.firestore();
const auth = firebase.auth();

export { db, auth, FieldValue };
