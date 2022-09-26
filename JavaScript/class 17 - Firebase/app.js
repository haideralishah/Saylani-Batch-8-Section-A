import { app } from "./firebaseconfig.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";

const auth = getAuth(app);

let email = document.querySelector("#email");
let password = document.querySelector("#password");

let btn = document.querySelector("#register");
btn.addEventListener("click", signupUser);

function signupUser() {
    createUserWithEmailAndPassword(auth, email.value, password.value)
        .then((user) => {
            console.log(`User registered successfully.`, user);
        })
        .catch((e) => {
            console.error(e, 'something went wrong.');
        })
}




