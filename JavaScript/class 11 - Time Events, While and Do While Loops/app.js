// var errP = document.querySelector("#err-display");

// function showError() {
//     errP.innerHTML = "Something went wrong.";
//     clearTimeout(hideErrTime);

// }

// function hideError() {
//     errP.innerHTML = "";
// }

// var hideErrTime = setTimeout(hideError, 1000);


// setTimeout(function () {
//     errP.innerHTML = "";
// }, 10000);















































// var errP = document.querySelector("#err-display");
// var isShown = false;
// function blinkError() {
//     if (isShown) {
//         errP.innerHTML = "";
//         isShown = false;
//     }
//     else {
//         errP.innerHTML = "Something went wrong.";
//         isShown = true;
//     }
// }

// setInterval(blinkError, 1000);



















// var i = 0;
// var printIter = setInterval(function () {
//     console.log(i);
//     if (i === 10) {
//         clearInterval(printIter);
//     }
//     i++;
// }, 1000)

// function stopIter() {
//     clearInterval(printIter);
// }



















// var timerH1 = document.querySelector("#msg");
// setTimeout(startTimer, 1000);
// var count = 9;
// var timerIntervalRef;
// function startTimer() {
//     timerIntervalRef = setInterval(updateTimer, 1000)
// }
// function updateTimer() {
//     timerH1.innerHTML = count.toString() + count.toString() + count.toString() + count.toString() + count.toString() + count.toString() + count.toString() + count.toString() + count.toString() + count.toString();
//     if (count < 0) {
//         timerH1.innerHTML = "Boooom!";
//         clearInterval(timerIntervalRef);
//     }
//     count--;
// }





















































// for (var i = 0; i < 10; i++) {

// }















// var i = 0;
// while (i !== 10) {
//     var ranNum = Math.ceil((Math.random() * 10));
//     console.log(ranNum);
//     i = ranNum;
// }















var i = 1;
while (i % 2 !== 0) {
    var ranNum = Math.ceil((Math.random() * 10));
    console.log(ranNum);
    i = ranNum;
}