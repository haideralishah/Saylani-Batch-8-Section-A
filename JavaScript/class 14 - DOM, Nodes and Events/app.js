// 1 for Element
// 3 for text


// console.log(document.childNodes[1].childNodes[2].childNodes[1].childNodes[0].nodeType); // node type
//   console.log(document.childNodes[1].childNodes[2].childNodes[1].childNodes[0].nodeValue); //text content
// console.log(document.childNodes[1].childNodes[2].childNodes[1].nodeName);// element name

// var h1 = document.getElementById("special")


































// var ul = document.getElementById("greet-count");
// var count = 1;
// function showGreetCount() {
//     var li = document.createElement("LI");
//     var greetTimeText = document.createTextNode("Hello " + count + " time.");
//     li.appendChild(greetTimeText);
//     ul.appendChild(li);
//     count++;
// }


































var newTodo = document.getElementById("todo");
var ol = document.getElementById("todo-list");
function addTodo() {
    var li = document.createElement("LI");
    var todoNode = document.createTextNode(newTodo.value);
    li.appendChild(todoNode);
    var btn = document.createElement("BUTTON");
    var btnTextNode = document.createTextNode('Delete');
    btn.appendChild(btnTextNode);
    btn.setAttribute('onclick', "deleteTodo()")
    li.appendChild(btn)
    ol.appendChild(li);
    newTodo.value = '';
}


function deleteAll() {
    // ol.removeChild(ol.childNodes[1]);
    ol.innerHTML = ""
}