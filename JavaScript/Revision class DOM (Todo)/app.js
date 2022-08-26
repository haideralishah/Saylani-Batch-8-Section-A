var newTodo = document.querySelector("#new-todo");
var todoList = document.querySelector(".list-item");

function addNewTodo() {
    var newTodoItem = newTodo.value;
    var li = newElements("LI", newTodoItem);

    var edt = newElements("BUTTON", "Edit");
    li.appendChild(edt);

    var del = newElements("BUTTON", "Delete");
    del.setAttribute("onclick", "deleteTodo(this)");
    li.appendChild(del);

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