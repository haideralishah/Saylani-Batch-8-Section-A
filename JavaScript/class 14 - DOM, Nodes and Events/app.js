// 1 for Element
// 3 for text


// console.log(document.childNodes[1].childNodes[2].childNodes[1].childNodes[0].nodeType); // node type
// console.log(document.childNodes[1].childNodes[2].childNodes[1].childNodes[0].nodeValue); //text content
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


































// var newTodo = document.getElementById("todo");
// var ol = document.getElementById("todo-list");
// function addTodo() {
//     var li = document.createElement("LI");
//     var todoNode = document.createTextNode(newTodo.value);
//     li.appendChild(todoNode);
//     var btn = document.createElement("BUTTON");
//     var btnTextNode = document.createTextNode('Delete');
//     btn.appendChild(btnTextNode);
//     btn.setAttribute('onclick', "deleteTodo()")
//     li.appendChild(btn)
//     ol.appendChild(li);
//     newTodo.value = '';
// }


// function deleteAll() {
//     // ol.removeChild(ol.childNodes[1]);
//     ol.innerHTML = ""
// }







































// var h1 = document.childNodes[1].childNodes[2].childNodes[1];
// h1.innerHTML = "good bye"

// var h1TextNode = document.childNodes[1].childNodes[2].childNodes[1].childNodes[0];
// h1TextNode.innerHTML = "Good bye";

// console.log(document.childNodes[1].childNodes[2].childNodes[1].childNodes[0].nodeType);
// console.log(document.childNodes[1].childNodes[2].childNodes[1].childNodes[0].nodeValue);

// document.childNodes[1].childNodes[2].childNodes[1].childNodes[0].nodeValue = "Good Bye"

// console.log(document.childNodes[1].childNodes[2].childNodes[1].nodeName);





















// parent.appendChild(child)

// var body = document.querySelector('body');

// var div = document.createElement('DIV');

// var p1 = document.createElement('P');
// var p1Text = document.createTextNode("HTML");
// p1.appendChild(p1Text);

// var p2 = document.createElement('P');
// var p2Text = document.createTextNode("CSS");
// p2.appendChild(p2Text);

// var p3 = document.createElement('P');
// var p3Text = document.createTextNode("JavaScript");
// p3.appendChild(p3Text)

// div.appendChild(p1);
// div.appendChild(p2);
// div.appendChild(p3);

// body.appendChild(div);






















// var h1 = document.querySelector("h1");

// console.log(h1);










// var ul = document.querySelector('#greet-count');
// var count = 1;
// function showGreetCount() {
//     var li = document.createElement('LI');
//     var liText = document.createTextNode("Salam " + count++);
//     li.appendChild(liText);
//     // ul.appendChild(li);
//     ul.insertBefore(li, ul.firstChild);
// }
// parent.insertBefore(newChild, oldChild)







// var parent = document.querySelector('#parent');

// console.log(parent.firstChild);
// console.log(parent.lastChild);






































// var parent = document.querySelector('#parent');
// var special = document.querySelector(".special");

// parent.insertBefore(newChild, special)
// console.log(special);



// console.log(special.nextSibling);
// console.log(special.previousSibling);
























































