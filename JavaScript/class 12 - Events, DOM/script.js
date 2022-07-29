
var userName = localStorage.getItem("studentName");
var greetUser = document.querySelector("#greet");

greetUser.innerHTML = 'Assalamualaikum Mr.' + userName;
