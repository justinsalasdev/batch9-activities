import firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";
import "firebase/auth";
import "firebase/app-check";
import createDMId from "../helpers/createDMId";

const firebaseConfig = {
  apiKey: "AIzaSyAzQhRKT9UhKG-ArC5-p8uNCVELWQXM7Yc",
  authDomain: "slack-clone-c2d0b.firebaseapp.com",
  projectId: "slack-clone-c2d0b",
  storageBucket: "slack-clone-c2d0b.appspot.com",
  messagingSenderId: "668223952571",
  appId: "1:668223952571:web:7397301c829bd2c6347b9e"
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const storage = firebase.storage();
const db = firebase.firestore();

// auth.useEmulator("http://localhost:9099");
// storage.useEmulator("localhost", 9199);
// db.useEmulator("localhost", 8080);

const appCheck = firebase.appCheck();
// Pass your reCAPTCHA v3 site key (public key) to activate(). Make sure this
// key is the counterpart to the secret key you set in the Firebase console.
appCheck.activate("6LfeJiAbAAAAANFed_vONtRsEYeDP1gh-0ldMx8E");

const setTimeStamp = firebase.firestore.FieldValue.serverTimestamp;
const getId = firebase.firestore.FieldPath.documentId;

function createDMRef(from, to) {
  return db.collection("DMs").doc(createDMId(from, to));
}

function createGMRef(chatId) {
  return db.collection("GMs").doc(chatId);
}

export { db, auth, storage, setTimeStamp, createDMRef, createGMRef, getId };
