import { initializeApp } from "https://www.gstatic.com/firebasejs/9.20.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.20.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.20.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDj3aBXjXHd9eUWk271n3D664sMoCsSI5g",
  authDomain: "auction-website-5b756.firebaseapp.com",
  projectId: "auction-website-5b756",
  storageBucket: "auction-website-5b756.appspot.com",
  messagingSenderId: "160069030821",
  appId: "1:160069030821:web:d01e68cd583f1b76e88e4c",
  measurementId: "G-7YSR9SQRH7"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
setPersistence(auth, inMemoryPersistence) 
