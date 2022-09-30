import { auth } from "./firebaseconfig.js";
import { signInWithEmailAndPassword, onAuthStateChanged,signOut } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";


let email = document.querySelector("#email");
let password = document.querySelector("#password");

let btn = document.querySelector("#login");
btn.addEventListener("click", login);

async function login() {
    try {
        let { user } = await signInWithEmailAndPassword(auth, email.value, password.value);
        // console.log(user);
        location = "./todos.html";
    }
    catch (e) {
        console.error(e.message);
    }
}








// signup > 
// send verification email >
// new page with message "Verify your email" 
// and button to resend verification email




// sign in > 
// if user is verified {
//     route to home page

// }
// else{
//         new page with message "Verify your email" 
//         and button to resend verification email 
// }









onAuthStateChanged(auth, (user) => {
    if (user) {
    //  console.log('user found', user);
      const uid = user.uid;
      // ...
    } else {
        // console.log('user not found', user)
    }
  });


//   setTimeout(async ()=>{
//     await signOut(auth);
//   }, 5000)
  




// todos: [
//     {},
//     {},
//     {}
// ]

// users: [
//     {},
//     {},
//     {}
// ]




// users: {
//    docId-1: {},
//    docId-2: {},
//    docId-3:  {}
// }



// todos: {
//     todo1: {},
//     todo2: {}
// }

// questions: {
//     q1: {
//         examId: "html"
//     },
//     q2:{
//         examId: "js"
//     },
//     q3: {}
// }
