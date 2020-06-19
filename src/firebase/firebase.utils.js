import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDZsvl-RFpw32reCAhIjaihUgRF7dAZA5I",
  authDomain: "crown-db-54732.firebaseapp.com",
  databaseURL: "https://crown-db-54732.firebaseio.com",
  projectId: "crown-db-54732",
  storageBucket: "crown-db-54732.appspot.com",
  messagingSenderId: "458905331994",
  appId: "1:458905331994:web:d720d09fdf8ad492ce24a3",
  measurementId: "G-M0HXQKXEPT",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => {
  auth.signInWithPopup(provider);
};

export default firebase;
