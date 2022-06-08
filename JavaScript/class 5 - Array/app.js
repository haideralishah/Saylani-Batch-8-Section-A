

// var cities = ["karachi", "lahore", "peshawar"];

// console.log(cities[2]);




// var cities = [];

// cities[0] = "Karachi";

// cities[2] = "Lahore";

// console.log(cities[1]);

// cities[1] = "Peshawar";

// console.log(cities);








// var fruit1 = prompt('what is your favorite fruit?');

// var fruits = [fruit1];

// var fruits = [];

// fruits[1] = fruit1;

// var fruits = [
//     prompt('what is your favorite fruit?'),
//     prompt('what is your favorite fruit?'),
//     prompt('what is your favorite fruit?')
// ];

// console.log(fruits);

















































// var mixedArr = ["karachi", "lahore", 705955, true];
// console.log(mixedArr);





// var arr = [
//     ["taha", "zain", "sabeer"],
//     [2643, 2644, 2477],
//     [true, false, true]
// ];

// console.log(arr[0][2]);



























// var fruits = ['apple', 'banana', 'watermelon'];

// fruits.pop();
// console.log(fruits);

// fruits.push("oranges", "mango", "grapes");

// console.log(fruits);





// var fruits = ['apple', 'banana', 'watermelon'];

// fruits.shift();

// console.log(fruits);

// fruits.unshift("Mango", 'grapes');

// console.log(fruits);























// var students = [];
// var studentNameInput = document.querySelector("#student-name");
// var studentsListEl = document.querySelector("#students-list");

// function addStudent() {
//     students.push(studentNameInput.value);
//     studentsListEl.innerHTML = students;
//     studentNameInput.value = "";
// }


































// var fruits = ['apple', 'banana', 'orange', 'mango', 'watermelon'];

// fruits.splice(1, 2, 'grapes', 'peach');
// fruits.splice(2, 0, "grapes", "peach");

// console.log(fruits);



/*
string
number
boolean

object





arr.pop();
arr.push(elementsToAdd);

arr.shift();
arr.unshift(elementsToAdd);

arr.splice(whereToStart, numberOfElementsToRemove, elementsToAdd);


typeof
Array.isArray();


*/



// var fruits = ['apple', 'banana', 'orange', 'mango', 'watermelon'];
// var userName = "haider";
// console.log(typeof fruits);

// console.log(Array.isArray(fruits));
// console.log(Array.isArray(userName));













// var fruits = ['apple', 'banana', 'orange', 'mango', 'watermelon'];
// var favFruits = fruits.slice(1, 3);

// console.log(favFruits, fruits);


// var fruits = ['apple', 'banana', 'orange', 'mango', 'watermelon'];
// var favFruits = fruits.slice(1, 3);
// console.log(favFruits.length);



// var num = [250, 350, 450, 150, 125, 700];
// var fruits = ['banana', 'apple', 'mango', 'watermelon', 'apple', 'orange'];
// console.log(num.sort());
// console.log(fruits.sort());




















// var carsName = "khyber - mehran - cyber truck - fx - sharade";
// var carsArr = carsName.split(" - ");
// console.log(carsArr);

// var userName = "Haider Ali Shah";
// console.log(userName.split(" "));













// var nic = "42111:541111:1";
// var nicSplitted = nic.split(":");
// var nicFormatted = nicSplitted.join("-");

// var userName = ["haider", "ali", "shah"];
// var fullName = userName.join(" ");

// console.log(fullName);






















// var secA = ["ali", "akram", "Riaz"];
// var secB = ["Taha", "imran", "zain"];

// var webClass = secA.concat(secB);

// console.log(webClass, secA, secB);

























var fruits = ['apple', 'banana', 'orange', 'mango', 'banana', 'watermelon'];

var checkFruit = prompt("let us know fruit name?");

console.log(fruits.indexOf(checkFruit));

console.log(fruits.includes(checkFruit));
