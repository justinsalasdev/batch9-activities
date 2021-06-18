import firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";
import "firebase/auth";
import "firebase/app-check";
import createDMId from "../helpers/createDMId";

const firebaseConfig = {
  apiKey: "AIzaSyDku-Gi0CviDzQvmvP5CvUeWK3dEpdFEeo",
  authDomain: "slack-clone-97162.firebaseapp.com",
  projectId: "slack-clone-97162",
  storageBucket: "slack-clone-97162.appspot.com",
  messagingSenderId: "733729208163",
  appId: "1:733729208163:web:11b1e07fa61c3c1fe7c556"
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
