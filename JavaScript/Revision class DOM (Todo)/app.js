var newTodo = document.querySelector("#new-todo");
var todoList = document.querySelector(".list-item");
var addBtn = document.querySelector("#add-todo-btn");
function addNewTodo() {
    var newTodoItem = newTodo.value;
    var li = newElements("LI", newTodoItem); // <li>take breakfast</li>

    var edt = newElements("BUTTON", "Edit"); // <button>Edit</button>
    edt.setAttribute("onclick", "editItem(this)"); //<button onclick="editItem(this)">Edit</button>
    li.appendChild(edt);                    // <li>take breakfast<button>Edit</button></li>

    var del = newElements("BUTTON", "Delete"); // <button>Delete</button>
    del.setAttribute("onclick", "deleteTodo(this)");// <button onclick="deleteTodo(this)">Delete</button>
    li.appendChild(del);                    //<li>take breakfast<button>Edit</button><button onclick="deleteTodo(this)">Delete</button></li>

    todoList.appendChild(li);
    newTodo.value = "";
}
function newElements(elementName, text) {
    var e = document.createElement(elementName);
    var t = document.createTextNode(text);
    e.appendChild(t);
    return e;
}

function deleteTodo(element) {
    todoList.removeChild(element.parentNode);
}

//parent.removeChild(childRefrence)



function deleteAll() {
    todoList.innerHTML = "";
}


var editItemRef;
function editItem(element) {
    editItemRef = element.parentNode;
    newTodo.value = editItemRef.firstChild.nodeValue;

    addBtn.innerHTML = "Save";
    addBtn.setAttribute("onclick", 'saveTodo()');
    // addBtn.onclick = saveTodo;
}

function saveTodo() {
    var updatedTodo = newTodo.value;
    editItemRef.firstChild.nodeValue = updatedTodo;

    newTodo.value = "";
    addBtn.innerHTML = "Add";
    addBtn.setAttribute("onclick", 'addNewTodo()');
    editItemRef = undefined;
}













































































