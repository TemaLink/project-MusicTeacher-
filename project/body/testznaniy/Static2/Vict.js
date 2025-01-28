const questions = [
    {
        question: "Какая нота изображена на картинке?",
        optionA: "Ля",
        optionB: "Си",
        optionC: "Ми",
        optionD: "Ре",
        correctOption: "optionD"
    },

    {
        question: "Как называется символ, указывающий на повышение ноты на полутон?",
        optionA: "Бемоль",
        optionB: "Диез",
        optionC: "Бекар",
        optionD: "Акцент",
        correctOption: "optionB"
    },

    {
        question: "Что такое бемоль?",
        optionA: "Затишье",
        optionB: "Повторение звука",
        optionC: "Повышение ноты на полутон",
        optionD: "Уменьшение ноты на полутон",
        correctOption: "optionD"
    },

    {
        question: "Сколько основных нот в музыкальной шкале?",
        optionA: "J12",
        optionB: "10",
        optionC: "7",
        optionD: "5",
        correctOption: "optionC"
    },

    {
        question: "Где в малой октаве расположена нота соль?",
        optionA: "8 лад",
        optionB: "1 лад",
        optionC: "5 лад",
        optionD: "7 лад",
        correctOption: "optionD"
    },

    {
        question: "Что указывает на завершение музыкального произведения?",
        optionA: "Двойная черта",
        optionB: "Диез",
        optionC: "Скрипичный ключ",
        optionD: "Одиночная черта",
        correctOption: "optionA"
    },

    {
        question: "Сколько полутонов между до и ре?",
        optionA: "3",
        optionB: "1",
        optionC: "2",
        optionD: "4",
        correctOption: "optionC"
    },

    {
        question: "Что такое тон?",
        optionA: "2 полутона",
        optionB: "4 полутона",
        optionC: "1 полутон",
        optionD: "3 полутона",
        correctOption: "optionA"
    },

    {
        question: "Что такое легато?",
        optionA: "Затишье",
        optionB: "Ускорение",
        optionC: "Резкое отделение звуков",
        optionD: " Длительное соединение звуков",
        correctOption: "optionD"
    },

    {
        question: "Что такое Диез?",
        optionA: "Затишье",
        optionB: "Повторение звука",
        optionC: "Повышение ноты на полутон",
        optionD: "Уменьшение ноты на полутон",
        correctOption: "optionC"
    },

    {
        question: "Что означает вибрато в музыке?",
        optionA: "Долгое звучание",
        optionB: "Пауза",
        optionC: "Колебание тона",
        optionD: "Быстрое исполнение",
        correctOption: "optionC"
    },

    {
        question: "Восьмая нота это..?",
        optionA: "Восьмая целой",
        optionB: "Половина целой",
        optionC: "Четверть целой",
        optionD: "Целая",
        correctOption: "optionA"
    },


    {
        question: "Какой вид аккорда имеет три ноты?",
        optionA: "Квартет",
        optionB: "Триада",
        optionC: "Диафония",
        optionD: "Любой",
        correctOption: "optionB"
    },

    {
        question: "Что такое Бекар?",
        optionA: "Уменьшение ноты на полутон",
        optionB: "Повышение ноты на полутон",
        optionC: "Повторение звука",
        optionD: "Отмена",
        correctOption: "optionD"
    },

    {
        question: "Что такое мелодия?",
        optionA: "Последовательность звуков",
        optionB: "Ритмическая структура",
        optionC: "Набор аккордов",
        optionD: "Пауза между нотами",
        correctOption: "optionA"
    },

    {
        question: "Большой палец это..",
        optionA: "Индио",
        optionB: "Медио",
        optionC: "Пульгар",
        optionD: "Ануллер",
        correctOption: "optionC"
    },

    {
        question: "Что такое импровизация?",
        optionA: "Свободное исполнение",
        optionB: "Алгоритмическое представление",
        optionC: "Написание музыки",
        optionD: "KИсполнение нот",
        correctOption: "optionA"
    },

    {
        question: "Что такое темпо?",
        optionA: "Ритмическая структура",
        optionB: "Высота звука",
        optionC: "Скорость исполнения",
        optionD: "Двигающее начало",
        correctOption: "optionC"
    },

    {
        question: "Что такое триоль?",
        optionA: "Две ноты",
        optionB: "Четыре ноты",
        optionC: "Несколько стилей",
        optionD: "Три равные части",
        correctOption: "optionD"
    },

    {
        question: "Что обозначает глисано?",
        optionA: "Скольжение по струне",
        optionB: "Уменьшение громкости",
        optionC: "Колебание звука",
        optionD: "Пауза между нотами",
        correctOption: "optionA"
    }


]


let shuffledQuestions = [] //empty array to hold shuffled selected questions out of all available questions

function handleQuestions() { 
    //function to shuffle and push 10 questions to shuffledQuestions array
//app would be dealing with 10questions per session
    while (shuffledQuestions.length <= 9) {
        const random = questions[Math.floor(Math.random() * questions.length)]
        if (!shuffledQuestions.includes(random)) {
            shuffledQuestions.push(random)
        }
    }
}


let questionNumber = 1 //holds the current question number
let playerScore = 0  //holds the player score
let wrongAttempt = 0 //amount of wrong answers picked by player
let indexNumber = 0 //will be used in displaying next question

// function for displaying next question in the array to dom
//also handles displaying players and quiz information to dom
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
    const currentQuestion = shuffledQuestions[indexNumber] //gets current Question 
    const currentQuestionAnswer = currentQuestion.correctOption //gets current Question's answer
    const options = document.getElementsByName("option"); //gets all elements in dom with name of 'option' (in this the radio inputs)
    let correctOption = null

    options.forEach((option) => {
        if (option.value === currentQuestionAnswer) {
            //get's correct's radio input with correct answer
            correctOption = option.labels[0].id
        }
    })

    //checking to make sure a radio input has been checked or an option being chosen
    if (options[0].checked === false && options[1].checked === false && options[2].checked === false && options[3].checked == false) {
        document.getElementById('option-modal').style.display = "flex"
    }

    //checking if checked radio button is same as answer
    options.forEach((option) => {
        if (option.checked === true && option.value === currentQuestionAnswer) {
            document.getElementById(correctOption).style.backgroundColor = "green"
            playerScore++ //adding to player's score
            indexNumber++ //adding 1 to index so has to display next question..
            //set to delay question number till when next question loads
            setTimeout(() => {
                questionNumber++
            }, 1000)
        }

        else if (option.checked && option.value !== currentQuestionAnswer) {
            const wrongLabelId = option.labels[0].id
            document.getElementById(wrongLabelId).style.backgroundColor = "red"
            document.getElementById(correctOption).style.backgroundColor = "green"
            wrongAttempt++ //adds 1 to wrong attempts 
            indexNumber++
            //set to delay question number till when next question loads
            setTimeout(() => {
                questionNumber++
            }, 1000)
        }
    })
}



//called when the next button is called
function handleNextQuestion() {
    checkForAnswer() //check if player picked right or wrong option
    unCheckRadioButtons()
    //delays next question displaying for a second just for some effects so questions don't rush in on player
    setTimeout(() => {
        if (indexNumber <= 9) {
//displays next question as long as index number isn't greater than 9, remember index number starts from 0, so index 9 is question 10
            NextQuestion(indexNumber)
        }
        else {
            handleEndGame()//ends game if index number greater than 9 meaning we're already at the 10th question
        }
        resetOptionBackground()
    }, 1000);
}

//sets options background back to null after display the right/wrong colors
function resetOptionBackground() {
    const options = document.getElementsByName("option");
    options.forEach((option) => {
        document.getElementById(option.labels[0].id).style.backgroundColor = ""
    })
}

// unchecking all radio buttons for next question(can be done with map or foreach loop also)
function unCheckRadioButtons() {
    const options = document.getElementsByName("option");
    for (let i = 0; i < options.length; i++) {
        options[i].checked = false;
    }
}

// function for when all questions being answered
function handleEndGame() {
    let remark = null
    let remarkColor = null

    // condition check for player remark and remark color
    if (playerScore <= 4) {
        remark = "Тебе надо тренироваться.. Сходи на легкий уровень"
        remarkColor = "red"
    }
    else if (playerScore >= 6 && playerScore < 8) {
        remark = "Неплохо, но нужно потренироваться.. Нормальный уровень будет как раз"
        remarkColor = "orange"
    }
    else if (playerScore >= 8) {
        remark = "Похоже вы все и так знаете, хотите потренироваться?"
        remarkColor = "green"
    }
    const playerGrade = (playerScore / 10) * 100

    //data to display to score board
    document.getElementById('remarks').innerHTML = remark
    document.getElementById('remarks').style.color = remarkColor
    document.getElementById('grade-percentage').innerHTML = playerGrade
    document.getElementById('wrong-answers').innerHTML = wrongAttempt
    document.getElementById('right-answers').innerHTML = playerScore
    document.getElementById('score-modal').style.display = "flex"

}

//closes score modal, resets game and reshuffles questions
function closeScoreModal() {
    questionNumber = 1
    playerScore = 0
    wrongAttempt = 0
    indexNumber = 0
    shuffledQuestions = []
    NextQuestion(indexNumber)
    document.getElementById('score-modal').style.display = "none"
}

//function to close warning modal
function closeOptionModal() {
    document.getElementById('option-modal').style.display = "none"
}

