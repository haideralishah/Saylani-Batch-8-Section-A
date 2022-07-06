

// function prepareMeal(ingrd1, ingrd2) {

//     console.log(ingrd1, ingrd2);

// }

// prepareMeal("Egg", "Paratha");

// prepareMeal("Bengan", "Roti");

// prepareMeal("Karela", "Roti");









































// var userName = "Haider";

// function greetUser() {
//     userName = "Ali";
//     console.log(userName);
// }

// console.log(userName);

// greetUser();





















// var sum;

// function calcSum() {
//     sum = 2 + 2;
// }
// calcSum();

// console.log(sum);

// function calcMult() {
//     sum = sum * 4;
// }

// calcMult();
// console.log(sum);
































// sum();

// function sum() {
//     console.log(2 + 2);
// }


// x = 5;

// console.log(x);

// var x = 7;
// console.log(x);



















// var userName = prompt('what is your name?');

// function calculateZakat(nisab) {
//     var zakatRate = 2.5;
//     var zakatAmount = nisab * zakatRate / 100;
//     return zakatAmount;
// }

// var farzZakat = calculateZakat(100000);

// console.log(farzZakat);



































































// function sum(num1, num2, num3, num4) {
//     console.log(num1 + num2 + num3 + num4);
// }

// sum(2, 4, 3, 2);
// sum(10, 11, 50, 30);
















// function multiply(num1, num2) {
//     return num1 * num2;
// }

// function sum(num1, num2) {
//     return num1 + num2;
// }

// //                       4    ,  6     ,   multiply
// function doAsDirected(number1, number2, passedFunc) {
//     var solveValue = passedFunc(number1, number2);
//     console.log(solveValue);
// }

// doAsDirected(4, 6, multiply);
// doAsDirected(4, 6, sum);



















// function requestToReturnAmount(name) {
//     console.log(name + ' bhai paise wapis krdo');
// }

// function greet(name) {
//     console.log('Salam ' + name + " bhai");
// }

// function salawat(userName, func) {
//     func(userName);
// }
// salawat("aslam", greet);
// salawat("akram", requestToReturnAmount);








// function square(num) {
//     return num * num;
// }

// function calcHyp(base, perpendicular) {
//     var hypotenuseSqr = square(base) + square(perpendicular);
//     var hyp = Math.sqrt(hypotenuseSqr);
//     console.log(hyp);
// }

// calcHyp(3, 4);






























// function sumAll() {
//     var totalSum = 0;
//     for (var i = 0; i < arguments.length; i++) {
//         totalSum = totalSum + arguments[i];
//     }
//     console.log(totalSum);
// }

// sumAll(2, 4, 3, 4, 8, 9);
// sumAll(3, 7, 9);














// palindrome 
// "car" // rac
// "madam" // madam


function findPalindrome(str) {
    var reverseStr = str.split("").reverse().join("");

    if (str === reverseStr) console.log(true);
    else console.log(false);

}

findPalindrome("haider");
findPalindrome("madam");
findPalindrome("civic");


























