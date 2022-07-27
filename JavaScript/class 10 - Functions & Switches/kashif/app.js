//this function will show an alert with the text argument
function showAlert(text) {
    alert(text)
}


/* 
DOM === "Document Object Model"
*/

function getValue(val) {
    var input = document.getElementById('display')
    input.value += val
}

function sum() {
    var input = document.getElementById('display')
    var answer = eval(input.value)

    input.value = answer
}