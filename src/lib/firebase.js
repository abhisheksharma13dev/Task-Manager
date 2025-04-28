import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC0IAkrpJ-6fmpG0HB_eXtmlsYAR7ihRdw",
  authDomain: "task-manager-ff302.firebaseapp.com",
  projectId: "task-manager-ff302",
  storageBucket: "task-manager-ff302.firebasestorage.app",
  messagingSenderId: "598054233066",
  appId: "1:598054233066:web:5bf3c671c2caed47488893",
  measurementId: "G-JKL2E9H4Q8"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };