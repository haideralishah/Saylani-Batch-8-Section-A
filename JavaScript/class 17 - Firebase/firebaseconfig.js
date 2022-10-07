import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
import { getAuth , onAuthStateChanged} from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";
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


















// users = [
//     {},
//     {},
//     {}
// ];


// users : {
//     docId_01 : {
//         firstName: 'Haider',
//         lastName: "Ali",
//         rollNum: 2643,
//         email: "headeralishah@gmail.com",
//         uid: "PWuxUJJX8XcEeXQFOdZzc7VQBQI2"
//     },
//     WJrENLReRedhCTDNzgJy3W0vnOn1 : {
//         firstName: 'Abdullah',
//         lastName: "hussian",
//         rollNum: 2655,
//         email: "h@gmail.com",
//         uid: "WJrENLReRedhCTDNzgJy3W0vnOn1"
//     }
// }



// todos:{
//     todo_docId_01: {
//         todo:"visit university",
//         priority: 'high',
//         timeStamp: new Date(),
//         userID: "WJrENLReRedhCTDNzgJy3W0vnOn1"
//     },
//     todo_docId_02: {
//         todo:"visit saylani",
//         priority: 'high',
//         timeStamp: new Date(),
//         userID: "WJrENLReRedhCTDNzgJy3W0vnOn1"
//     },
//     todo_docId_03: {
//         todo:"visit bank",
//         priority: 'high',
//         timeStamp: new Date(),
//         userID: "PWuxUJJX8XcEeXQFOdZzc7VQBQI2"
//     }

// }

















// quizes : {
//     docId01: {
//         quizName: "HTML",
//         marks: 75,
//         instructions: "a quick brown fox ...",
//         time: 45
//     } ,
//     docId02: {
//         quizName: "CSS",
//         marks: 75,
//         instructions: "a quick brown fox ...",
//         time: 45
//     } 
// }

// questions: {
//     questionDocID01: {
//         question: "how many levels of heading are there in HTML?",
//         options: [5,6,7,8],
//         correctOption: 1,
//         quizId: 'docId01'
//     },
//     questionDocID03: {
//         question: "how to change color of text?",
//         options: ["color","background","paint", "color-background"],
//         correctOption: 0,
//         quizId: 'docId02'
//     }
//     questionDocID02: {
//         question: "how to bold a text?",
//         options: ["b","em","strong", "p"],
//         correctOption: 0,
//         quizId: 'docId01'
//     }
// }






