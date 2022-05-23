

















// function bringTea() {
//     console.log('bring tea');
// }

// bringTea();


// bringTea();


// bringTea();















// function calcTotalPercent() {
//     var htmlMarks = +prompt("what is your HTML marks?");
//     var cssMarks = +prompt("what is your CSS marks?");

//     var obtainedMarks = htmlMarks + cssMarks;
//     var percentage = obtainedMarks / 200 * 100;

//     console.log(percentage + " %");
// }

// calcTotalPercent();
// calcTotalPercent();
// calcTotalPercent();
































// function ramooKaka(dish1, dish2, guest) {
//     console.log("Please have " + dish1 + " and " + dish2 + " for Mr." + guest);
// }

// ramooKaka("tea", "biscuits", "Akram");

// ramooKaka("biryani", "raita", "Aslam");

// ramooKaka("bangan k bhrte", "chapati", "Abdul");




























// var userNum1 = +prompt("enter a number.");
// var userNum2 = +prompt("enter another number.");

// function sum(num1, num2) {
//     console.log(num1 + num2);
// }

// sum(userNum1, userNum2);
// sum(5, 7);








// function calcTotalPercent() {
//     var htmlMarks = +prompt("what is your HTML marks?");
//     var cssMarks = +prompt("what is your CSS marks?");

//     var obtainedMarks = htmlMarks + cssMarks;
//     var percentage = obtainedMarks / 200 * 100;

//     console.log(percentage + " %");
// }


































// var h1 = document.querySelector("h1");
// console.log(h1.innerHTML);



// var a = document.querySelector("a");
// console.log(a.innerHTML);

// var ulEl = document.querySelector("ul");
// console.log(ulEl.innerHTML);




// var inputEl = document.querySelector("#user-name");
// var h2El = document.querySelector("#greet-user");

// function register() {
//     h2El.innerHTML = "Welcome Mr. " + inputEl.value;
//     clearFunc();
// }

// function clearFunc() {
//     inputEl.value = "";
// }














// var pName = document.querySelector("#province-name");

// function liveInSindh() {
//     pName.innerHTML = "You live in Sindh";
// }

// function liveInPunjab() {
//     pName.innerHTML = "You live in Punjab";
// }

// function liveInKP() {
//     pName.innerHTML = "You live in KP";
// }

// function liveInBalochistan() {
//     pName.innerHTML = "You live in Balochistan";
// }

// function liveInCapital() {
//     pName.innerHTML = "You live in Capital";
// }











var pName = document.querySelector("#province-name");

function liveInProvince(provineName) {
    pName.innerHTML = "You live in " + provineName;
}