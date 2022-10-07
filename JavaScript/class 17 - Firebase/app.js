import { auth, db } from "./firebaseconfig.js";
import { createUserWithEmailAndPassword, sendEmailVerification } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";
import { doc, setDoc, deleteDoc } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js";


let email = document.querySelector("#email");
let password = document.querySelector("#password");

let username = document.querySelector("#username");
let rollNum = document.querySelector("#roll-number");


let btn = document.querySelector("#register");
btn.addEventListener("click", signupUser);

async function signupUser() {
    try {
        let user = await createUserWithEmailAndPassword(auth, email.value, password.value);
        let userDocRef = doc(db, 'users', user.user.uid);
        await setDoc(userDocRef, {
            username: username.value,
            rollNum: rollNum.value,
            email: email.value
        });

        verifyEmail()
    }
    catch (e) {
        console.error(e);
    }
}

async function verifyEmail() {
    await sendEmailVerification(auth.currentUser);
    console.log('please check your email address and confirm.')
}























































let userDocRef = doc(db, 'users', '8GNmBzxRCYNZcjlWRJ3CbAhJ48h1');

await setDoc(userDocRef, {
    rollNum: 2644
}, { merge: true });

// let docRef = doc(db, "todos", "8GNmBzxRCYNZcjlWRJ3CbAhJ48h1");

// await deleteDoc(docRef);
