const questions = [
    {
        question: "Буква C это нота...",
        optionA: "До",
        optionB: "Си",
        optionC: "Ля",
        optionD: "Ре",
        correctOption: "optionA"
    },

    {
        question: "Буква D это нота...",
        optionA: "Фа",
        optionB: "Си",
        optionC: "Ре",
        optionD: "Ми",
        correctOption: "optionC"
    },

    {
        question: "Буква E это нота...",
        optionA: "Ми",
        optionB: "Ля",
        optionC: "Ре",
        optionD: "Соль",
        correctOption: "optionA"
    },

    {
        question: "Буква F это нота...",
        optionA: "Ре",
        optionB: "Соль",
        optionC: "Ля",
        optionD: "Фа",
        correctOption: "optionD"
    },

    {
        question: "Буква G это нота...",
        optionA: "Ля",
        optionB: "Соль",
        optionC: "До",
        optionD: "Ре",
        correctOption: "optionB"
    },

    {
        question: "Буква A это нота...",
        optionA: "Ля",
        optionB: "Си",
        optionC: "Фа",
        optionD: "Ре",
        correctOption: "optionA"
    },

    {
        question: "Буква H это нота...",
        optionA: "Фа",
        optionB: "Ля",
        optionC: "Си",
        optionD: "Ре",
        correctOption: "optionC"
    },

    {
        question: "Буква B это нота...",
        optionA: "Си",
        optionB: "Ля",
        optionC: "Ми",
        optionD: "Ре",
        correctOption: "optionA"
    },

    {
        question: "Буква H так же буква...",
        optionA: "B",
        optionB: "C",
        optionC: "E",
        optionD: "F",
        correctOption: "optionA"
    },

    {
        question: "Буква B так же буква...",
        optionA: "H",
        optionB: "F",
        optionC: "G",
        optionD: "E",
        correctOption: "optionA"
    }

]


let shuffledQuestions = [] 

function handleQuestions() { 
    while (shuffledQuestions.length <= 9) {
        const random = questions[Math.floor(Math.random() * questions.length)]
        if (!shuffledQuestions.includes(random)) {
            shuffledQuestions.push(random)
        }
    }
}


let questionNumber = 1 
let playerScore = 0  
let wrongAttempt = 0 
let indexNumber = 0 


function NextQuestion(index) {
    handleQuestions()
    const currentQuestion = shuffledQuestions[index]
    document.getElementById("question-number").innerHTML = questionNumber
    document.getElementById("player-score").innerHTML = playerScore
    document.getElementById("display-question").innerHTML = currentQuestion.question;
    document.getElementById("option-one-label").innerHTML = currentQuestion.optionA;
    document.getElementById("option-two-label").innerHTML = currentQuestion.optionB;
    document.getElementById("option-three-label").innerHTML = currentQuestion.optionC;
    document.getElementById("option-four-label").innerHTML = currentQuestion.optionD;

}


function checkForAnswer() {
    const currentQuestion = shuffledQuestions[indexNumber] 
    const currentQuestionAnswer = currentQuestion.correctOption
    const options = document.getElementsByName("option");
    let correctOption = null

    options.forEach((option) => {
        if (option.value === currentQuestionAnswer) {

            correctOption = option.labels[0].id
        }
    })
    if (options[0].checked === false && options[1].checked === false && options[2].checked === false && options[3].checked == false) {
        document.getElementById('option-modal').style.display = "flex"
    }
    options.forEach((option) => {
        if (option.checked === true && option.value === currentQuestionAnswer) {
            document.getElementById(correctOption).style.backgroundColor = "green"
            playerScore++ 
            indexNumber++ 
            setTimeout(() => {
                questionNumber++
            }, 1000)
        }

        else if (option.checked && option.value !== currentQuestionAnswer) {
            const wrongLabelId = option.labels[0].id
            document.getElementById(wrongLabelId).style.backgroundColor = "red"
            document.getElementById(correctOption).style.backgroundColor = "green"
            wrongAttempt++ 
            indexNumber++
            setTimeout(() => {
                questionNumber++
            }, 1000)
        }
    })
}




function handleNextQuestion() {
    checkForAnswer() 
    unCheckRadioButtons()
    setTimeout(() => {
        if (indexNumber <= 9) {
            NextQuestion(indexNumber)
        }
        else {
            handleEndGame()
        }
        resetOptionBackground()
    }, 1000);
}


function resetOptionBackground() {
    const options = document.getElementsByName("option");
    options.forEach((option) => {
        document.getElementById(option.labels[0].id).style.backgroundColor = ""
    })
}


function unCheckRadioButtons() {
    const options = document.getElementsByName("option");
    for (let i = 0; i < options.length; i++) {
        options[i].checked = false;
    }
}


function handleEndGame() {
    let remark = null
    let remarkColor = null


    if (playerScore <= 4) {
        remark = "Пока что не стоит переходить к следующей теме.."
        remarkColor = "red"
    }
    else if (playerScore >= 5 && playerScore < 8) {
        remark = "Думаю, стоит доучить материал.."
        remarkColor = "orange"
    }
    else if (playerScore >= 8) {
        remark = "Отлично! Идем дальше?"
        remarkColor = "green"
    }
    const playerGrade = (playerScore / 10) * 100

    document.getElementById('remarks').innerHTML = remark
    document.getElementById('remarks').style.color = remarkColor
    document.getElementById('grade-percentage').innerHTML = playerGrade
    document.getElementById('wrong-answers').innerHTML = wrongAttempt
    document.getElementById('right-answers').innerHTML = playerScore
    document.getElementById('score-modal').style.display = "flex"

}


function closeScoreModal() {
    questionNumber = 1
    playerScore = 0
    wrongAttempt = 0
    indexNumber = 0
    shuffledQuestions = []
    NextQuestion(indexNumber)
    document.getElementById('score-modal').style.display = "none"
}

function closeOptionModal() {
    document.getElementById('option-modal').style.display = "none"
}