import { auth, db } from "./firebaseconfig.js";
import { createUserWithEmailAndPassword, sendEmailVerification } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";
import { doc, setDoc, deleteDoc, collection, where, query, getDocs } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js";


// let email = document.querySelector("#email");
// let password = document.querySelector("#password");

// let username = document.querySelector("#username");
// let rollNum = document.querySelector("#roll-number");


// let btn = document.querySelector("#register");
// btn.addEventListener("click", signupUser);

// async function signupUser() {
//     try {
//         let user = await createUserWithEmailAndPassword(auth, email.value, password.value);
//         let userDocRef = doc(db, 'users', user.user.uid);
//         await setDoc(userDocRef, {
//             username: username.value,
//             rollNum: rollNum.value,
//             email: email.value
//         });

//         verifyEmail()
//     }
//     catch (e) {
//         console.error(e);
//     }
// }

// async function verifyEmail() {
//     await sendEmailVerification(auth.currentUser);
//     console.log('please check your email address and confirm.')
// }


















































// let userDocRef = doc(db, 'users', '8GNmBzxRCYNZcjlWRJ3CbAhJ48h1');

// await setDoc(userDocRef, {
//     rollNum: 2644
// }, { merge: true });

// let docRef = doc(db, "todos", "8GNmBzxRCYNZcjlWRJ3CbAhJ48h1");

// await deleteDoc(docRef);










const citiesRef = collection(db, "cities");

await setDoc(doc(citiesRef, "SF"), {
    name: "Karachi",
    state: "Sindh",
    country: "Pakistan",
    capital: false,
    population: 860000,
    regions: ["west_coast", "norcal"]
});

await setDoc(doc(citiesRef, "ABC"), {
    name: "Hyderabad",
    state: "Sindh",
    country: "Pakistan",
    capital: false,
    population: 860000,
    regions: ["west_coast", "norcal"]
});
await setDoc(doc(citiesRef, "LA"), {
    name: "Los Angeles", state: "CA", country: "USA",
    capital: false, population: 3900000,
    regions: ["west_coast", "socal"]
});
await setDoc(doc(citiesRef, "DC"), {
    name: "Washington, D.C.", state: null, country: "USA",
    capital: true, population: 680000,
    regions: ["east_coast"]
});
await setDoc(doc(citiesRef, "TOK"), {
    name: "Tokyo", state: null, country: "Japan",
    capital: true, population: 9000000,
    regions: ["kanto", "honshu"]
});
await setDoc(doc(citiesRef, "BJ"), {
    name: "Beijing", state: null, country: "China",
    capital: true, population: 21500000,
    regions: ["jingjinji", "hebei"]
});














let collectionRef = collection(db, "cities");

// let condition = where("state", "==", "CA");
// let condition = where("capital", "==", true);
// let condition = where("population", "<", 1000000);
// let condition = where("capital", "!=", false)

// if(regions.includes("west-coast"))
// let condition = where("regions", "array-contains", "west_coast");

// if('country' === "USA" || "country" === "Japan" || "country" === "Pakistan")
// let condition = where('country', 'in', ['USA', 'Japan', 'Pakistan']);

// let condition = where('country', 'not-in', ['USA', 'Japan'])
// let condition =  where('regions', 'array-contains-any', ['west_coast', 'east_coast'])

let condition1 = where("state", "==", "Sindh");
let condition2 = where("name", "==", "Karachi");

// const q = query(collectionRef, condition);
const q = query(collectionRef, condition1, condition2);

let citiesSnapshot = await getDocs(q);
// console.log(citiesSnapshot);

citiesSnapshot.forEach((doc) => {
    console.log(doc.id, " => ", doc.data());
});


















