import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDT_IOl7D48K0ZIM-teqbS99llxWPDaKgE",
  authDomain: "vue3-firebase-projects-db91d.firebaseapp.com",
  projectId: "vue3-firebase-projects-db91d",
  storageBucket: "vue3-firebase-projects-db91d.appspot.com",
  messagingSenderId: "861702228438",
  appId: "1:861702228438:web:0b6462231c922d19c07c77",
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const date = firebase.firestore.FieldValue.serverTimestamp;
const auth = firebase.auth();

export { db, date, auth };
