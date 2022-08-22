var questionContainer = document.getElementById('question')
var question1 = new Question('What is HTML?', ['Hyper Text Makeup Language', 'Hyper Text Checkup Language', 'Hyper Text Markup Language', 'Hyper Text Breakup Language'], 'Hyper Text Markup Language')
var question2 = new Question('What is CSS?', ['Hyper Text Makeup Language', 'Hyper Text Checkup Language', 'Hyper Text Markup Language', 'Hyper Text Breakup Language'], 'Hyper Text Markup Language')
var question3 = new Question('What is JS?', ['Hyper Text Makeup Language', 'Hyper Text Checkup Language', 'Hyper Text Markup Language', 'Hyper Text Breakup Language'], 'Hyper Text Markup Language')

var questions = [
    question1,
    question2,
    question3
]


function Question(title, options, answer) {
    this.title = title
    this.options = options
    this.answer = answer
}


var currentQuestion = 0

renderQuiz()

function renderQuiz() {
    var titleElement = document.createElement('h3')
    titleElement.innerText = questions[currentQuestion].title

    questionContainer.appendChild(titleElement)

    for (var i = 0; i < questions[currentQuestion].options.length; i++) {
        var optionElement = document.createElement('input')
        optionElement.setAttribute('type', 'radio')
        optionElement.value = questions[currentQuestion].options[i]

        var spanElement = document.createElement('span')
        spanElement.innerHTML = questions[currentQuestion].options[i] + ' <br />'

        questionContainer.appendChild(optionElement)
        questionContainer.appendChild(spanElement)
    }

    var nextBtn = document.createElement('button')
    nextBtn.innerText = 'Next'
    // nextBtn.setAttribute('onclick', 'nextQuestion(' + currentQuestion + 1 + ')')
    nextBtn.setAttribute('onclick', `nextQuestion()`)

    questionContainer.appendChild(nextBtn)
}

function nextQuestion() {
    currentQuestion++
    questionContainer.innerHTML = ''
    renderQuiz()
}