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



// 2 X 2 = 4

var tableName = +prompt('write any table name?');
var timeLimit = +prompt('write any table times?');

for (var tableTime = 1; tableTime < timeLimit + 1; tableTime++) {
    console.log(tableName + " X " + tableTime + " = " + tableName * tableTime);
}

