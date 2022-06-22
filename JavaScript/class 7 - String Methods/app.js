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



































// var str = "The qUICk BrOWn FOx World War II jumPS oVER World War II thE laZY World War II DOG"
// var strToChange = "the Second World War";




































// var fullName = "hAiDEr aLI sHAh";
// var fullNameArr = fullName.split(" ");
// var titleCaseFName = "";
// for (var i = 0; i < fullNameArr.length; i++) {
//     var strToConvert = fullNameArr[i];
//     var firstChr = strToConvert[0];
//     firstChr = firstChr.toUpperCase();

//     var remainChr = strToConvert.slice(1);
//     remainChr = remainChr.toLowerCase();

//     titleCaseFName = titleCaseFName + firstChr + remainChr + " "
// }
// console.log(titleCaseFName);

















































// var message = "Ali and Sami are best and friends. They play cricket and football together.";
// // &
// for (var i = 0; i < message.length; i++) {
//     var itemToCheck = message.slice(i, i + 3);
//     if (itemToCheck === "and") {
//         message = message.slice(0, i) + "&" + message.slice(i + 3);
//     }
// }

// console.log(message);


// var str = "Lorem World War II ipsum  dolor, sit amet consectetur adipisicing World War II  elit. Vero, natus! Hic nostrum laudantium ullam numquam minus aliquid, quis ducimus. Quis ducimus repellendus esse perferendis eum illum eligendi vel inventore World War II  vitae?";

// for (var i = 0; i < str.length; i++) {
//     var itemToCheck = str.slice(i, i + 12);
//     if (itemToCheck === "World War II") {
//         str = str.slice(0, i) + "the second world war" + str.slice(i + 12)
//     }
// }
// console.log(str);






































// var firstName = ['Aslam', 'Akram', 'Akbar'];
// var lastName = ['Khan', 'Choudary', 'Shah'];

// function geneName(fName, lName) {
//     for (var i = 0; i < fName.length; i++) {
//         for (var j = 0; j < lName.length; j++) {
//             console.log(fName[i] + " " + lName[j]);
//         }
//     }
// }

// geneName(firstName, lastName);










































































// Write a function to find the longest common prefix string amongst an array of strings.
// If there is no common prefix, return an empty string "".
// Example 1:
// Input: ["flower","flow","flight"]
// Output: "fl"
// Example 2:
// Input: ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.
// Input: ['aklama', 'akram', 'akbar']
// Output: "ak"
// Input: ['java', 'javascript', 'javacode']
// Output: "java"
// Note:
// All given inputs are in lowercase letters a-z.














function findLngPrefix(arr) {
    var itemToCheck = arr[0];
    var itemChrLen = itemToCheck.length;
    var chrCount = 0;

    for (var i = 0; chrCount < itemChrLen; i++) {
        for (var j = 0; j < itemChrLen; j++) {
            console.log(itemToCheck.slice(j, chrCount + 1));
        }
        chrCount++;
    }
}

findLngPrefix(["flower", "flow", "flight"]);
