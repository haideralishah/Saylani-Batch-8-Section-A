// var userName = "hadier";

// let userName = prompt('what is your name?');
// console.log(userName)




// var userName = 'haider';
// function greetUser(name) {
//     if (isNaN(name)) {
//         let userName = prompt('what is your nick name');
//         alert("Hey! " + userName);
//     }
//     console.log(userName);
// }
// greetUser("ali");



























// const url = "http://www.google.com";
// // url = "haider";
// console.log(url);







// let para = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus asperiores rem aut ea earum natus ad
// excepturi,


// cumque quisquam doloribus accusamus molestiae facere atque delectus recusandae maiores error
// temporibus adipisci.`

// console.log(para);



// let firstName = `haider`;
// let lastName = `ali`;
// let greeting = `<h1>Good morning ${firstName} ${lastName}</h1>`;
// console.log(greeting);

// let greeting = "Good morning " + fullName;


// let firstName = `haider`;
// let lastName = `ali`;
// // console.log(firstName + " " + lastName);
// console.log(`${firstName} ${lastName}`);



// let tableName = prompt('which table you want to print?');
// for (var i = 0; i < 11; i++) {
//     // console.log(tableName + " x " + i + " = " + tableName * i)
//     console.log(`${tableName} x ${i} = ${tableName * i}`);
// }














// console.log(`49 ${7 + 5}`);

// console.log(`${4 + 6}`);








// let user = {
//     name: 'haider',
//     rollNumber: 2643,
//     subject: 'JavaScript'
// }

// let { name, rollNumber } = user;
// console.log(name, rollNumber);






// let tech = ['html', 'css', 'javascript'];

// let [markup, , programming] = tech;

// console.log(programming, markup);














// function greetUser({ greetMsg, firstName, lastName }) {
//     let msg = `${greetMsg} ${firstName} ${lastName}`;
//     console.log(msg);
// }
// let paramObj = {
//     firstName: 'haider',
//     lastName: 'ali',
//     greetMsg: 'hello'
// }
// greetUser(paramObj)















// function discountedRate(price, rate = 10) {
//     console.log(price - (price * rate / 100));
// }

// discountedRate(5000, 15);



// let fruits1 = ['Apple', 'Banana', 'Mango'];
// let fruits2 = ['Orange', 'Watermelon', 'Grapes'];

// // let fruits = fruits1.concat(fruits2);
// let fruits = [...fruits1, ...fruits2];

// // let fruits1Clone = fruits1.slice(0) ;
// let fruits1Clone = [...fruits1];
// console.log(fruits);




// function greet(x, ...y) {
//     // y is an Array
//     console.log(y);
// }
// greet(3, "hello", true)


// function billHistory(firstName, billNumber, ...items) {
//     console.log(firstName, billNumber, items);
// }

// billHistory('akram', 246481, "Daal", "Cheeni", "Salt", "Lux");


















// var propertyName = "subject";
// let student = {
//     name: 'aslam',
//     rollNumber: 2644,
//     [propertyName]: "javascript"
// }
// // student[propertyName] = "JavaScript";
// console.log(student);




// let student = {
//     name: 'aslam',
//     rollNumber: 2644,
//     subject: "javascript"
// }

// for (var key in student) {
//     console.log(key, student[key]);

// }











// let firstName = "haider";
// let lastName = "ali";

// let student = {
//     firstName,
//     lastName,
//     rollNum: 2643
// }
// console.log(student)









































// ()=>{}


// setTimeout(() => {
//     console.log('hello');
// }, 500);




// let sum = function (num1, num2) {
//     return num1 + num2;
// }

// let product = (num1, num2) => num1 * num2;

// console.log(product(5, 2));


// let greet = name => `Hello ${name}`;

// console.log(greet('Akram'));













// function cookFood(ing1 = "tea", ing2 = "biscuits", ...restIng) {
//     let basicMeal = `Bring ${ing1} and ${ing2}`;
//     let anyExtraMixture = restIng.length > 0 ? `Mixture of ${restIng}` : `Nothing extra`;
//     // console.log(basicMeal, anyExtraMixture);
//     return { basicMeal, anyExtraMixture };
// }

// let hospitality = cookFood("biryani", 'raita', 'salad', 'labe sherin');
// console.log(hospitality);














// let makeMeal = (ing1 = "tea", ing2 = "biscuits", ...restIng) => {
//     let basicMeal = `Bring ${ing1} and ${ing2}`;
//     let anyExtraMixture = restIng.length > 0 ? `Mixture of ${restIng}` : `Nothing extra`;
//     // console.log(basicMeal, anyExtraMixture);
//     return { basicMeal, anyExtraMixture };
// }

// let hospitality = makeMeal();
// console.log(hospitality);

















// let makeMeal = (ing1 = "tea", ing2 = "biscuits") => {
//     return `Bring ${ing1} and ${ing2}`;
// }


// let makeMeal = (ing1 = "tea", ing2 = "biscuits") => `Bring ${ing1} and ${ing2}`;

// let hospitality = makeMeal();
// console.log(hospitality);



// let makeMeal1 = (ing1 = "tea", ing2 = "biscuits") => ({ ing1, ing2 })

// let hospitality1 = makeMeal1();
// console.log(hospitality1);



// let makeMeal = ing1 => `Bring ${ing1}`;

// let makeLunch = () => `Bring Daal Chawal`;

// let hospitality = makeMeal("tea");
// console.log(hospitality);







// () => {

// }

// () => a;

// a => a;

// (a, b) => a + b;







// let user = {
//     name: 'Akram',
//     greet: function () {
//         console.log(this);
//         let newUser = {
//             greetOneMoreTime: function () {
//                 console.log(this);
//             },
//             greetOneMoreTimeWithArrow: () => {
//                 console.log(this);
//             }
//         }
//         newUser.greetOneMoreTime();
//         newUser.greetOneMoreTimeWithArrow();
//     },
//     greetWithArrow: () => {
//         console.log(this);
//     }
// }

// user.greet();
// user.greetWithArrow();















































































// let arr = [5, 2, 7, 4, 6, 8];

// let newArr = [];

// for (var i = 0; i < arr.length; i++) {
//     let newItem = arr[i] + 2;
//     newArr.push(newItem);
// }
// // console.log(newArr);
// let arr = [5, 2, 7, 4, 6, 8];
// var newArr = arr.map(item => item + 2);











// let fruits = ['apple', 'banana', 'orange'];

// let arr = [5, 2, 7, 4, 6, 8];
// let newArr = arr.map(item => item + 2);
// console.log(newArr);

// let newArr = arr.map((item) => {
//     return item + 2
// });



// fruits.map((fruit, index, completeArr) => {
//     console.log(fruit, index, completeArr);
// })
























// let arr = [5, 2, 7, 4, 6, 8];

// let fiveOrMore = arr.filter(num => num >= 5);

// let evens = arr.filter(num => num % 2 === 0);

// console.log(fiveOrMore, evens);


























































// let firstName = ['Akram', 'Aslam', 'Amir', 'Abdullah', 'Muzammil'];
// let lastName = ["Khan", "Ahmed", "Khan", "Ansari", "Qureshi", "Khan"];

// let fullName = firstName.map(fName => `${fName} ${lastName[Math.floor((Math.random() * 6))]}`);

// let fullNames = firstName.map((fName) => {
//     let lNameIndex = Math.floor((Math.random() * 6));
//     return `${fName} ${lastName[lNameIndex]}`;
// });

// console.log(fullNames);





// let khans = fullNames.filter(fullName => fullName.split(" ")[1] === "Khan");

// console.log(khans);














































// let numbers = [1, 2, 3, 4];
// let sum = numbers.reduce((result, num) => result + num, 4);

// let sum = numbers.reduce((result, num) => {
//     // console.log(result, num);
//     return result + num
// }, 5);

// console.log(sum);









// let num = [5, 2, 4, 6, 9, 1];
// let prod = num.reduce((result, num) => result * num, 1);
// console.log(prod);

























// let pets = ['dog', 'chicken', 'cat', 'dog', 'chicken', 'chicken', 'rabbit'];
// let petsCount = pets.reduce((result, pet) => {
//     if (result[pet]) {
//         result[pet]++;
//     }
//     else {
//         result[pet] = 1; //result.rabbit = 1
//     }
//     return result;
// }, {});

// console.log(petsCount);




// let num = [5, 2, 4, 6, 9, 1];
// let largestNum = num.reduce((result, num) => {
//     if (num > result) {
//         result = num;
//     }
//     return result;
// }, 0);
// console.log(largestNum);

























// let firstArr = [1, 2, 3, 4, 5, 6];
// let secondArr = [3, 5, 6, 7];

// function isSubset(arr1, arr2) {
//     let isAvailable = true;
//     for (let i = 0; i < arr2.length; i++) {
//         if (!arr1.includes(arr2[i])) {
//             isAvailable = false;
//             break;
//         }
//     }
//     return isAvailable;
// }

// let isItSubset = isSubset(firstArr, secondArr);
// console.log(isItSubset);





// let firstArr = [1, 2, 3, 4, 5, 6];
// let secondArr = [3, 5, 6];

// function isSubset(arr1, arr2) {
//     return arr2.every(item => arr1.includes(item));
// }

// let isItSubset = isSubset(firstArr, secondArr);
// console.log(isItSubset);























































// function checkIfEven(num) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (num % 2 === 0) {
//                 resolve();
//             }
//             else {
//                 reject();
//             }
//         }, 1000);
//     })
// }

// checkIfEven(6)
//     .then(() => {
//         console.log('Yes it is an even number');
//     })
//     .catch(() => {
//         console.error("this is an odd number");
//     });





























// function chkAuthSec() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             let time = new Date();
//             let sec = time.getSeconds();
//             // let sec = 13;
//             if (sec % 5 === 0) {
//                 reject({ error: 404, errorMessage: "You wrote wrong email or password." });
//             }
//             else if (sec % 2 === 0) {
//                 resolve("authorised");
//             }
//             else {
//                 resolve("unauthorised");
//             }
//         }, 100);
//     });
// }

// chkAuthSec()
//     .then((success) => {
//         console.log(`User is ${success}.`);
//     })
//     .catch((error) => {
//         console.error(error.errorMessage);
//     })
























// let users = [
//     { email: 'abc@gmail.com', password: "123456" },
//     { email: 'xyz@gmail.com', password: "ab1232" },
//     { email: 'def@gmail.com', password: "asdfasd" },
// ]

























// class Animal {
//     constructor(name, legsCount, color) {
//         this.name = name;
//         this.legsCount = legsCount;
//         this.color = color;
//     }
//     speak = "bark";
//     eat() {
//         console.log(`${this.name} eats bone.`);
//     }

// }

// let dog = new Animal("dog", 4, 'white');
// console.log(dog);
// dog.eat();
























// class Animal {
//     constructor(name, legsCount) {
//         this.name = name;
//         this.legsCount = legsCount;
//     }
// }

// class Rabit extends Animal {
//     constructor(name, legsCount, speed, quality) {
//         super(name, legsCount);
//         this.speed = speed;
//         this.quality = quality;
//     }
// }

// class Turtle extends Animal {
//     constructor(name, legsCount, quality, specialPower) {
//         super(name, legsCount);
//         this.quality = quality;
//         this.specialPower = specialPower
//     }
// }

// let rabit = new Rabit("rabit", 4, "fast", 'hide');
// let turtle = new Turtle("turtle", 4, 'consistant', "hard shell");

// console.log(rabit, turtle);








































































// fetch("https://jsonplaceholder.typicode.com/users/1")
//     .then(response => response.json())
//     .then((todosList) => {
//         console.log(todosList);
//     })





fetch("https://jsonplaceholder.typicode.com/photos/")
    .then(response => response.json())
    .then((todos) => {
        console.log(todos);
        // makeUIElements(todos);
        makeUIElementsWithReduce(todos);
    })

let div = document.querySelector(".special");
function makeUIElementsWithReduce(todos) {
    let element = todos.reduce((result, { url, title, thumbnailUrl }) => {
        return result + `
        <a href="${url}" target="_blank">
            <figure>
                <img src="${thumbnailUrl}" alt="${title}" />
                <figcaption>${title}</figcaption>
            </figure>
        </a> <br />`;
    }, "");

    div.innerHTML = element;
}




// function makeUIElements(todos) {

//     let element = "";
//     for (let i = 0; i < todos.length; i++) {
//         let { url, title, thumbnailUrl } = todos[i];
//         let a = `
//         <a href="${url}" target="_blank">
//             <figure>
//                 <img src="${thumbnailUrl}" alt="${title}" />
//                 <figcaption>${title}</figcaption>
//             </figure>
//         </a> <br />`;
//         element = element + a;

//     }

//     console.log(element);
//     div.innerHTML = element;

// }