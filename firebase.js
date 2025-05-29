import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";
import { getDatabase, ref, get, set, increment } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyDa_EMZz-Pb4dBrrUwXO1-3AS4DhwxPQY4",
  authDomain: "portfolio-56a56.firebaseapp.com",
  databaseURL: "https://portfolio-56a56-default-rtdb.firebaseio.com",
  projectId: "portfolio-56a56",
  storageBucket: "portfolio-56a56.appspot.com", // ← ini yang benar
  messagingSenderId: "912138027853",
  appId: "1:912138027853:web:855c99bdaf4b75571e2d04",
  measurementId: "G-PZEJC44RNX"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export { db, ref, get, set, increment };