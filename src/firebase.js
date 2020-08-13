import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAt4Dhu7hXDWme9SJ3wG6r6euM-c4Yz6tw",
  authDomain: "instagram-clone-3b95e.firebaseapp.com",
  databaseURL: "https://instagram-clone-3b95e.firebaseio.com",
  projectId: "instagram-clone-3b95e",
  storageBucket: "instagram-clone-3b95e.appspot.com",
  messagingSenderId: "451634540867",
  appId: "1:451634540867:web:4e14f4ac52f158644b3ff6",
  measurementId: "G-8GMQKZSSG2",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
