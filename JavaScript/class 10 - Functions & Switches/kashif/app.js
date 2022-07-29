var operands = ['+', '-', '*', '/']

//this function will show an alert with the text argument
function showAlert(text) {
    alert(text)
}


/* 
DOM === "Document Object Model"
*/

function getValue(val) {
    var input = document.getElementById('display')
    var lastIndex = input.value.length - 1
    var lastChar = input.value[lastIndex]
    // if ((val === '+' || val === '-') && (lastChar === '+' || lastChar === '-')) {
    if (operands.includes(val) && operands.includes(lastChar)) {
        if (val !== lastChar) {
            var temp = input.value.split('')
            temp.splice(lastIndex, 1, val)
            input.value = temp.join('')
        }
    } else {
        input.value += val
    }
}

function sum() {
    var input = document.getElementById('display')
    var lastChar = input.value[input.value.length - 1]
    var errorElem = document.getElementById('error-elem')
    // var btnElem = document.getElementById('btn-answer')

    // if (lastChar === '+' || lastChar === '-') {
    if (operands.includes(lastChar)) {
        errorElem.innerHTML = 'Invalid Expression'
    } else {
        var answer = eval(input.value)

        input.value = answer
        // btnElem.innerHTML = answer
        errorElem.innerHTML = ''
    }
}