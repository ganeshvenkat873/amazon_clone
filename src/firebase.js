import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyABxLoxd9TJf5iKyxD7cJGWHheTaz-MkvM",
  authDomain: "clone-c837f.firebaseapp.com",
  projectId: "clone-c837f",
  storageBucket: "clone-c837f.appspot.com",
  messagingSenderId: "642325021216",
  appId: "1:642325021216:web:6bb3405d3fc6330d007245",
  measurementId: "G-5J1PEJX6PX"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };