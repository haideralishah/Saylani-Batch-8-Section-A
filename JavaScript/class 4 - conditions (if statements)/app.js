

// var tableForm = document.querySelector("#table-name");
// var tableForm, count;
// var table = document.querySelector("#table");


// function printTable() {
//     tableName = +tableForm.value;
//     count = 0;

//     console.log(tableName + " x " + count + " = " + tableName * count++);
//     console.log(tableName + " x " + count + " = " + tableName * count++);
//     console.log(tableName + " x " + count + " = " + tableName * count++);
//     console.log(tableName + " x " + count + " = " + tableName * count++);
//     console.log(tableName + " x " + count + " = " + tableName * count++);
//     console.log(tableName + " x " + count + " = " + tableName * count++);
//     console.log(tableName + " x " + count + " = " + tableName * count++);
//     console.log(tableName + " x " + count + " = " + tableName * count++);
//     console.log(tableName + " x " + count + " = " + tableName * count++);
//     console.log(tableName + " x " + count + " = " + tableName * count++);
//     console.log(tableName + " x " + count + " = " + tableName * count++);
//     tableForm.value = "";
// }









/*

===   equal to
!==   not equal to
>     greater than
<     less than
>=    greater than or equal to
<=    less than or equal to

*/





// var age = +prompt("What is your age?");
// var minAge = 16;

// if (age >= minAge) {
//     console.log("Congrats! You have got admission.");
// }






// var age = document.querySelector("#age");
// var messageP = document.querySelector("#message");
// var minAge = 16;
// var scholarShipMinAge = 14;

// function validateAdmission() {
//     if (age.value >= minAge) {
//         messageP.innerHTML = "Congrats! You have got admission.";
//     }
//     else if (age.value >= scholarShipMinAge) {
//         messageP.innerHTML = "Congrats! You have got scholarship.";
//     }
//     else {
//         messageP.innerHTML = "Sorry! You are very young, please come once you are 14+.";
//     }
// }









// var burgerShopName = "Al Madina";
// var friesShopName = "Bashir";
// var tikkaShopName = "meerath tikka";
// var availableShop = prompt('Which shop is open?');

// if (availableShop === burgerShopName) {
//     console.log("mere liye ande wala burger.");
// }
// else if (availableShop === friesShopName) {
//     console.log("mere liye fries");
// }
// else if (availableShop === tikkaShopName) {
//     console.log("mere liye ek bihari tikka");
// }
// else {
//     console.log("mere liye kch b khane k liye le ao");
// }










































// Q: 11


// var secreteNum = 4;
// var userGuess = +prompt("Please pick a number from 1 to 5"); //3

// if (secreteNum === userGuess) {
//     console.log("Bingo! Correct answer");
// }
// else if (secreteNum + 1 === userGuess) {
//     console.log("Close enough to the correct answer");
// }
// else if (secreteNum - 1 === userGuess) {
//     console.log("Close enough to the correct answer");
// }
// else {
//     console.log('You failed.');
// }







/*
&&   and
||   OR


*/





// var nationality = document.querySelector("#nation");
// var visaStatus = document.querySelector("#visa");
// var greetEl = document.querySelector("#message");

// var requiredNationality = "UK";
// var requiredVisa = "active";

// function enterSwitzerLand() {
//     if (nationality.value === requiredNationality || visaStatus.value === requiredVisa) {
//         greetEl.innerHTML = "Welcome to SwitzerLand";
//     }
//     else {
//         greetEl.innerHTML = "Sorry! go to Afghanistan";
//     }
// }












































// var qualification = document.querySelector("#qualification");
// var enrollment = document.querySelector("#enrollment");
// var greetEl = document.querySelector("#message");

// var requiredEducation = "matric";
// var alreadyEnrolled = "no";

// function applyForAdmission() {
//     if (qualification.value === requiredEducation && enrollment.value == alreadyEnrolled) {
//         greetEl.innerHTML = "Congrats! You are eligible for admission.";
//     }
//     else {
//         greetEl.innerHTML = "Sorry! You are not eligible for admission.";
//     }
// }
























// var num1 = +prompt('type a number');
// var operator = prompt('Type an operator +-x/');
// var num2 = +prompt('type another number');

// if (operator === "+") {
//     console.log(num1 + num2);
// }
// else if (operator === "-") {
//     console.log(num1 - num2);
// }
// else if (operator === "x") {
//     console.log(num1 * num2);
// }
// else if (operator === "/") {
//     console.log(num1 / num2);
// }
// else if (operator === "%") {
//     console.log(num1 % num2);
// }
// else {
//     console.log("Something went wrong.");
// }