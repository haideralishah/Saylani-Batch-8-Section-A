/*
where to start
when to finish
any change in iteration
*/
// function printName(iVal) {
//     console.log('Haider' + iVal);
// }

// for (var i = 0; i < 50; i++) {
//     printName(i);
// }



// 2 X 6 =12

// var tableName = +prompt('write any table name?');
// var timeLimit = +prompt('write any table times?');

// for (var i = 0; i <= timeLimit; i++) {
//     console.log(tableName + " X " + i + " = " + tableName * i);
// }













/*
where to start
when to finish
any change in iteration
*/

// ramadan first
// 30th ramadan
// increase 1 roza

// for (var roza = 1; roza <= 30; roza++) {
//     console.log("Ramadan Transmission Roza# " + roza);
// }


















// var fruits = ['mango', 'orange', 'banana'];

// for (var i = 0; i < fruits.length; i++) {
//     console.log(fruits[i] + " " + fruits[i + 1]);
// }

// console.log(fruits[0]);
// console.log(fruits[1]);
// console.log(fruits[2]);


















// var pEl = document.querySelectorAll('p');
// console.log(pEl[1].innerHTML);
// pEl[1].innerHTML = "This is paragraph# 2";

// for (var i = 0; i < pEl.length; i++) {
//     pEl[i].innerHTML = "This is paragraph# " + (i + 1);
// }





// var specialEl = document.querySelectorAll(".special");
// console.log(specialEl[0]);























// var tablePara = document.querySelector("#tables");

// var tableName = +prompt('write any table name?');
// var timeLimit = +prompt('write any table times?');

// for (var i = 0; i <= timeLimit; i++) {
//     var tableResult = tableName + " X " + i + " = " + tableName * i;
//     tablePara.innerHTML = tablePara.innerHTML + tableResult + "<br />";
// }































































var numArr = [100, 200, 150, 500, 50, 170];
var largestNumber = 0; // 100
for (var i = 0; i < numArr.length; i++) {
    if (numArr[5] > largestNumber) {
        largestNumber = numArr[i];
    }
    // if (largestNumber && numArr[i] > largestNumber) {
    //     largestNumber = numArr[i];
    // }
    // else if (!largestNumber) {
    //     largestNumber = numArr[i];
    // }
}
console.log(largestNumber);