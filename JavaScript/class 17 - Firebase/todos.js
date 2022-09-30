import { db, auth } from "./firebaseconfig.js";
import { collection, addDoc, Timestamp, getDocs, where, query } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js";
import { signOut } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";


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

let bodyEl = document.querySelector("#body-el")
bodyEl.addEventListener('click', fetchTodos);

let ul = document.querySelector("#all-todos");

async function fetchTodos() {
    console.log("fetchTodos", auth.currentUser.uid);
    let collectionRef = collection(db, "todos");
    let condition = where("uid", "==", auth.currentUser.uid);

    const q = query(collectionRef, condition);

    let allTodosSnapshot = await getDocs(q);

    allTodosSnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());
        ul.innerHTML = ul.innerHTML + `<li id=${doc.id}>${doc.data().todo}</li>`

    });


}





