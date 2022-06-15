
// sheet 2
// Q6
// var partnerName = "Hania";
// var numOfChildren = "5";
// var jobTitle = "Software Engineer";
// var geoLocation = "Dubai";
// var pEl = document.querySelector("#fortune-teller");

// pEl.innerHTML = "You will be a " + jobTitle + " in " + geoLocation + ", and married to " + partnerName + " with " + numOfChildren + " kids.";

// document.write("You will be a " + jobTitle + " in " + geoLocation + ", and married to " + partnerName + " with " + numOfChildren + " kids.");





















// sheet 3
// Q4

// var storeName = "J.";
// var visitorName = "Taha";
// var prodTitle = "3 Peice Suit";
// var quantity = 10;
// var price = 6000;
// var pEl = document.querySelector("#shoping-cart");

// pEl.innerHTML = visitorName + " ordered " + quantity + " " + prodTitle + " worth " + price * quantity + " rupees from " + storeName;

// document.write();










// sheet 5-7
// Q8
// var totalMarks = 1200;
// var obtainedMarks = 900;
// var percentage = obtainedMarks / totalMarks * 100;

// document.write('Percentage: ' + percentage + "%");














// sheet 5-7
// Q9

// var usd = 10;
// var AED = 25;
// var usdToPkr = 203.75;
// var aedToPkr = 55.47;

// document.write("Total liquid assests available: " + (usd * usdToPkr + AED * aedToPkr));














// sheet 5-7
// Q11
// var currentYear = 2028;
// var birthYear = 1992;
// document.write('He is either ' + (currentYear - birthYear) + " or " + (currentYear - birthYear - 1));



// var r = 5.78;
// var pie = 3.142;
// var circumference = 2 * pie * r;
// var area = pie * (r ** 2);
// document.write('Circumference of provided radius is ' + circumference + "<br />");
// document.write('Area of provided radius is ' + area);











// sheet 5-7
// Q15
// var favSnack = "Lays";
// var currentAge = 22;
// var maxAge = 45;
// var qtyPerDay = 1;

// document.write("You will need " + ((maxAge - currentAge) * 365.25) + " " + favSnack + " to last you until the ripe old age of " + maxAge);












// sheet 8-11
// Calculator

var num1 = "", num2 = "", operator;
var screen = document.querySelector("#screen");

function userPress(userInputs) {
    if (operator) {
        num2 = num2 + userInputs;
        printOnScreen(num2);
    }
    else {
        num1 = num1 + userInputs;
        printOnScreen(num1);
    }
}

function assignOperator(operatorName) {
    operator = operatorName;
}

function printOnScreen(digits) {
    screen.innerHTML = digits;
}

function evaluateMaths() {
    var sum;
    if (operator === "+") sum = Number(num1) + Number(num2);
    else if (operator === "-") sum = Number(num1) - Number(num2);
    else if (operator === "*") sum = Number(num1) * Number(num2);
    else if (operator === "/") sum = Number(num1) / Number(num2);

    printOnScreen(sum);
}

function clearCalc() {
    screen.innerHTML = 0;
    num1 = "", num2 = "", operator = undefined;
}





var arr = [];

arr[0] = abc;

var ar2 = [1,2,3,4];
