

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


// function findPalindrome(str) {
//     var reverseStr = str.split("").reverse().join("");

//     if (str === reverseStr) console.log(true);
//     else console.log(false);

// }

// findPalindrome("haider");
// findPalindrome("madam");
// findPalindrome("civic");


































// var userName;

// function greet() {
//     var userName = 'Ahmed';
// }

// greet();

// console.log(userName);










// greet();
// rollNum = 2643;

// function greet() {
//     var userName = 'Ahmed';
// }

// var rollNum;






















// var isEmployee = true;
// var isOfficeStaff = true;
// var isManagement = true;

// if (isEmployee === true) {
//     console.log("biryani");
// }
// else if (isOfficeStaff === true) {
//     console.log("kheer", "biryani");
// }
// else if (isManagement === true) {
//     console.log("VIP treatment", "kheer", "biryani");
// }




// var isEmployee = "management";
// switch (isEmployee) {
//     case "management":
//         console.log('VIP treatment');
//         isEmployee = "office staff";
//     case "office staff":
//         console.log('kheer');
//     default:
//         console.log('biryani');
// }










// var dayOfWk = 'Wed';
// switch (dayOfWk) {
//     case "Sat":
//         alert("Whoopee");
//         break;
//     case "Sun":
//         alert("Whoopee");
//         break;
//     case "Fri":
//         alert("TGIF!");
//         break;
//     default:
//         alert("Shoot me now!");
// }








































// function greetBirthday(birthdayPerson) {
//     var str = "happy birthday " + birthdayPerson;
//     return str;
// }

// var greet = greetBirthday("haider"); // happy birthday akram
// console.log(greet);












// var userName = prompt('what is your name?');





// function taxCalculator(rate, amount) {
//     var tax = amount / 100 * rate;
//     return tax;
// }

// var totalKEBill = 5000;
// var gst = taxCalculator(20, totalKEBill);
// var furtherGST = taxCalculator(18, totalKEBill);
// var fed = taxCalculator(15, totalKEBill);
// var totalNetBill = gst + furtherGST + fed + totalKEBill + 25
// console.log(totalNetBill);





























// var dayNames = ['Sun', "Mon", "Tue", "Wed"];
// var now = new Date();
// var dayNum = now.getDay();
// console.log(now.getTime());













// var now = new Date();
// var nowInMS = now.getTime();
// var examDate = new Date("July 22, 2022 9:00:00");
// var examDateInMS = examDate.getTime();

// console.log(Math.floor((examDateInMS - nowInMS) / 1000 / 60 / 60));






























// var str = "Lorem apple ipsum dolor sit amet apple consectetur adipisicing elit. Cum repellat et mollitia. Laborum apple itaque, ipsum eiusblanditiis in placeat perspiciatis quam soluta magni iste ipsa quas ducimus suscipit fugit labore? apple"
// str = str.replace(/apple/g, 'mango');
// console.log(str);














// var str = "Lorem watermelon ipsum dolor sit amet watermelon consectetur adipisicing elit. Cum repellat et mollitia. Laborum apple itaque, ipsum eiusblanditiis in placeat perspiciatis quam soluta magni iste ipsa quas ducimus suscipit fugit labore? watermelon"
// for (var i = 0; i < str.length; i++) {
//     var strToCheck = str.slice(i, i + 10);
//     if (strToCheck === "watermelon") {
//         str = str.slice(0, i) + str.slice(i + 10);
//     }
// }
// console.log(str);

























































             
var userName = "hAiDer alI sHah"; // Haider Ali Shah
userName = userName.split(" ");
var updatedUserName = [];
for (var i = 0; i < userName.length; i++) {
    var firstChr = userName[i].slice(0, 1);
    firstChr = firstChr.toUpperCase();
    var remainChr = userName[i].slice(1);
    remainChr = remainChr.toLowerCase();
    updatedUserName.push(firstChr + remainChr);
}
updatedUserName = updatedUserName.join(" ");
console.log(updatedUserName);























