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


let greet = name => `Hello ${name}`;

console.log(greet('Akram'));





































































