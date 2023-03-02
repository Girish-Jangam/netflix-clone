import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyC2tpkNGJBEZUU-OU0CST5NLZi1UIsABtI",
  authDomain: "netflix-70e83.firebaseapp.com",
  projectId: "netflix-70e83",
  storageBucket: "netflix-70e83.appspot.com",
  messagingSenderId: "60722462867",
  appId: "1:60722462867:web:7a71ce88f6f1d305cb0d66",
  measurementId: "G-V6TQJ1TGSZ",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;
