// var userName = prompt('what is your name?');

// localStorage.setItem("studentName", userName);


// var userName = localStorage.getItem('studentName');
// console.log(userName);



















/*
localstorage.setItem("Key", "value")
localstorage.getItem()

JSON.stringify()
JSON.parse()

*/
var stName = document.querySelector("#student-name");
function addStudent() {
    var allStudents = localStorage.getItem('students');
    if (allStudents) {
        allStudents = JSON.parse(allStudents);
    }
    else {
        allStudents = [];
    }
    allStudents.push(stName.value);
    allStudents = JSON.stringify(allStudents);
    localStorage.setItem('students', allStudents);

    stName.value = "";

}






