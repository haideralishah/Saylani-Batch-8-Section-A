

// var now = new Date();
// console.log(now);














// var daysName = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
// var now = new Date();
// console.log(now);
// console.log(now.getDay());
// console.log(daysName[now.getDay()]);































// var now = new Date("February 14, 2022");
// console.log(now);








// var daysName = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
// var now = new Date();
// console.log(now);
// console.log(now.getDay());
// console.log(now.getMonth());
// console.log(now.getDate());
// console.log(now.getFullYear());
// console.log(now.getHours());
// console.log(now.getMinutes());
// console.log(now.getMilliseconds());
// console.log(now.getTime());





























var today = (new Date()).getTime();
var courseEnd = (new Date("November 4, 2022")).getTime();
var remainingMSeconds = courseEnd - today;
var remaingDays = remainingMSeconds / 1000 / 60 / 60 / 24;
console.log(Math.ceil(remaingDays));







