import { db, auth } from "./firebaseconfig.js";
import { collection, addDoc, onSnapshot, Timestamp, getDocs, where, query } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js";
import { signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";

onAuthStateChanged(auth, (user) => {
    if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = user.uid;
        // fetchTodos();

        fetchTodosRealtime();
        // ...
    } else {
        // User is signed out
        // ...
    }
});






let addBtn = document.querySelector("#add-todo");
addBtn.addEventListener("click", addTodo);

let signOutBtn = document.querySelector("#sign-out");
signOutBtn.addEventListener("click", logOut);

let todo = document.querySelector("#new-todo");

async function addTodo() {
    // console.log('add todo func called', todo.value,auth.currentUser.uid);
    let collectionRef = collection(db, "todos");
    await addDoc(collectionRef, {
        todo: todo.value,
        uid: auth.currentUser.uid,
        todoCreateDate: Timestamp.fromDate(new Date())
    });

}


async function logOut() {
    console.log('signout called');
    await signOut(auth);
    location = "./index.html"
}


let ul = document.querySelector("#all-todos");

async function fetchTodos() {
    console.log("fetchTodos", auth.currentUser.uid);

    let collectionRef = collection(db, "todos");
    let condition = where("uid", "==", auth.currentUser.uid);

    const q = query(collectionRef, condition);

    let allTodosSnapshot = await getDocs(q);
    console.log(allTodosSnapshot);

    allTodosSnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        // console.log(doc.data());
        console.log(doc.id, " => ", doc.data());
        ul.innerHTML = ul.innerHTML + `<li id=${doc.id}>${doc.data().todo}</li>`

    });


}


async function fetchTodosRealtime() {
    let collectionRef = collection(db, 'todos');
    const q = query(collectionRef, where("uid", "==", auth.currentUser.uid));
     unsub = onSnapshot(q, (snapshot) => {
        snapshot.docChanges().forEach((change) => {
            if (change.type === "added") {
                console.log("New todo: ", change.doc.data());
                ul.innerHTML = ul.innerHTML + `<li id=${change.doc.id}>${change.doc.data().todo}</li>`
            }
            if (change.type === "modified") {
                console.log("Modified todo: ", change.doc.data());
            }
            if (change.type === "removed") {
                console.log("Removed todo: ", change.doc.data());
            }
        });
    })
    

}







