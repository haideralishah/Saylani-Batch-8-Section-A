import { auth } from "./firebaseconfig.js";
import { createUserWithEmailAndPassword, sendEmailVerification } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";


let email = document.querySelector("#email");
let password = document.querySelector("#password");

let btn = document.querySelector("#register");
btn.addEventListener("click", signupUser);

async function signupUser() {
    try {
        let user = await createUserWithEmailAndPassword(auth, email.value, password.value);
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
















































