// str.toLowerCase();
// str.toUpperCase();

// var cleanestCities = ['karachi', 'lahore', 'peshawar', 'quetta'];

// var whereDoYouLive = prompt("where do you live?"); // Karachi

// if (cleanestCities.includes(whereDoYouLive.toLowerCase())) {
//     document.write('You live in a clean city.');
// }
// else {
//     document.write('You live in a dirty city.');
// }











// var cityToCheck = prompt("Enter your city");
// var cleanestCities = ['Karachi', 'laHore', 'Peshawar', 'QUetta'];
// for (var i = 0; i <= 4; i++) {
//     if (cityToCheck.toLowerCase() === cleanestCities[i].toLowerCase()) {
//         console.log("It's one of the cleanest cities");
//     }
// }























// var cityToCheck = prompt("Enter your city"); // peshawar
// var cleanestCities = ['Karachi', 'laHore', 'Peshawar', 'QUetta'];
// for (var i = 0; i < cleanestCities.length; i++) {
//     if (cityToCheck.toLowerCase() === cleanestCities[i].toLowerCase()) {
//         console.log("It's one of the cleanest cities");
//         break;
//     }
// }
























// var cityToCheck = prompt("Enter your city"); // peshawar
// var cleanestCities = ['Karachi', 'laHore', 'Peshawar', 'QUetta'];
// var isClean = false;

// for (var i = 0; i < cleanestCities.length; i++) {
//     if (cityToCheck.toLowerCase() === cleanestCities[i].toLowerCase()) {
//         isClean = true;
//         break;
//     }
// }

// if (isClean) {
//     console.log("It's one of the cleanest cities");
// }
// else {
//     console.log("It's one of the uncleaned city");
// }




















// var userName = 'Haider Ali';

// // console.log(userName.slice(0, 8));

// console.log(userName.length);


// akbar
// Akbar










// var firstName = prompt('what is your first Name?'); // haider
// var firstChr = firstName[0];
// firstChr = firstChr.toUpperCase();

// var remainChr = firstName.slice(1);
// remainChr = remainChr.toLowerCase();

// console.log(firstChr + remainChr);




















// var userName = "haider ali shah";
// var nicNum = "42222-545714-6"
// console.log(userName.split(" "));
// console.log(nicNum.split("-"))

// var stName = ['haider', 'ali', 'shah'];
// console.log(stName.join(" "));

















// "hAiDEr aLI sHAh" // Haider Ali Shah

// "The qUICk BrOWn FOx jumPS oVER thE laZY DOG"
// The Quick Brown Fox Jumps Over The Lazy Dog


// var fullName = "hAiDEr aLI sHAh";
// var fullNameArr = fullName.split(" ");
// var titleCaseFName = [];
// for (var i = 0; i < fullNameArr.length; i++) {
//     var strToConvert = fullNameArr[i];
//     var firstChr = strToConvert[0];
//     firstChr = firstChr.toUpperCase();

//     var remainChr = strToConvert.slice(1);
//     remainChr = remainChr.toLowerCase();

//     titleCaseFName.push(firstChr + remainChr);
// }
// console.log(titleCaseFName.join(" "));



































var str = "The qUICk BrOWn FOx World War II jumPS oVER World War II thE laZY World War II DOG"
var strToChange = "the Second World War";




































var fullName = "hAiDEr aLI sHAh";
var fullNameArr = fullName.split(" ");
var titleCaseFName = "";
for (var i = 0; i < fullNameArr.length; i++) {
    var strToConvert = fullNameArr[i];
    var firstChr = strToConvert[0];
    firstChr = firstChr.toUpperCase();

    var remainChr = strToConvert.slice(1);
    remainChr = remainChr.toLowerCase();

    titleCaseFName = titleCaseFName + firstChr + remainChr + " "
}
console.log(titleCaseFName);




