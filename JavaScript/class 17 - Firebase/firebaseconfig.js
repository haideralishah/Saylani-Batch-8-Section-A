import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyD_H6VAD2ttyuZCimFMwW2Bm2u95ucKOeE",
    authDomain: "saylani-batch-8-4ca2c.firebaseapp.com",
    projectId: "saylani-batch-8-4ca2c",
    storageBucket: "saylani-batch-8-4ca2c.appspot.com",
    messagingSenderId: "284696154892",
    appId: "1:284696154892:web:91f7365f5ec275d3a1af29",
    measurementId: "G-NRX1PYVFKB"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
