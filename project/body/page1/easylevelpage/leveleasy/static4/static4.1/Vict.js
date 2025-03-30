const questions = [
    {
        question: "Какая нота играется на 6-й струне на 1-м ладу?",
        optionA: "Си",
        optionB: "Соль",
        optionC: "Фа",
        optionD: "Ля",
        correctOption: "optionC"
    },

    {
        question: "Какая нота соответствует открытой 5-й струне?",
        optionA: "Ми",
        optionB: "Ля",
        optionC: "Соль",
        optionD: "До",
        correctOption: "optionB"
    },

    {
        question: "Какая нота играется на 6-й струне на 3-м ладу?",
        optionA: "Фа",
        optionB: "Ми",
        optionC: "Ля",
        optionD: "Соль",
        correctOption: "optionD"
    },

    {
        question: "Какая нота играется на 5-й струне на 2-м ладу?",
        optionA: "Фа",
        optionB: "Си",
        optionC: "Ре",
        optionD: "Ми",
        correctOption: "optionB"
    },

    {
        question: "Какая нота соответствует открытой 6-й струне?",
        optionA: "Ре",
        optionB: "Ля",
        optionC: "Соль",
        optionD: "Ми",
        correctOption: "optionD"
    },

    {
        question: "Какая нота играется на 6-й струне на 5-м ладу?",
        optionA: "Ля",
        optionB: "Фа",
        optionC: "Соль",
        optionD: "Си",
        correctOption: "optionA"
    },

    {
        question: "Какая нота играется на 6-й струне, на 7-м ладу?",
        optionA: "Соль",
        optionB: "Ля",
        optionC: "Си",
        optionD: "Ми",
        correctOption: "optionC"
    },

    {
        question: "Какая нота находится между 0 ладом и 3 ладом на 6-й струне?",
        optionA: "Фа",
        optionB: "Ля",
        optionC: "Ре",
        optionD: "Соль",
        correctOption: "optionA"
    },

    {
        question: "Как сыграть Фа диез на 6-й струне?",
        optionA: "Зажать 0 лад",
        optionB: "Зажать 4 лад",
        optionC: "Зажать 6 лад",
        optionD: "Зажать 2 лад",
        correctOption: "optionD"
    },

    {
        question: "Как сыграть Соль бемоль на 6-й струне?",
        optionA: "Зажать 1 лад",
        optionB: "Зажать 4 лад",
        optionC: "Зажать 2 лад",
        optionD: "Зажать 7 лад",
        correctOption: "optionC"
    },

    {
        question: "Где находится нота Ля на 6-й струне?",
        optionA: "3 лад",
        optionB: "1 лад",
        optionC: "5 лад",
        optionD: "7 лад",
        correctOption: "optionC"
    },

    {
        question: "Как сыграть Си бемоль на 5-й струне?",
        optionA: "Зажать 1 лад",
        optionB: "Зажать 3 лад",
        optionC: "зажать 4 лад",
        optionD: "зажать 2 лад",
        correctOption: "optionA"
    },


    {
        question: "Открытая 5 струна это..",
        optionA: "Си",
        optionB: "Ля",
        optionC: "Ми",
        optionD: "Фа",
        correctOption: "optionB"
    },

    {
        question: "Какая нота на 6-й струне на 6-м ладу?",
        optionA: "Фа бемоль",
        optionB: "Ми диез",
        optionC: "Соль бемоль",
        optionD: "Ля диез",
        correctOption: "optionD"
    },

    {
        question: "Какая нота на 6-й струне на 6-м ладу?",
        optionA: "Си бемоль",
        optionB: "Ля бемоль",
        optionC: "Соль диез",
        optionD: "До бемоль",
        correctOption: "optionA"
    },

    {
        question: "Какая нота на 5-й струне на 1-м ладу?",
        optionA: "Ля бемоль",
        optionB: "Си",
        optionC: "Ля диез",
        optionD: "Ми диез",
        correctOption: "optionC"
    },

    {
        question: "Какая нота на 5-й струне на 1-м ладу?",
        optionA: "Си бемоль",
        optionB: "Ля бемоль",
        optionC: "Соль диез",
        optionD: "Ми диез",
        correctOption: "optionA"
    },

    {
        question: "Какая нота находится на тон ниже на 6 струне, относительно ноты Си?",
        optionA: "Ре",
        optionB: "Соль",
        optionC: "Ля",
        optionD: "Фа",
        correctOption: "optionC"
    },

    {
        question: "Какая нота находится на тон ниже на 6 струне, относительно ноты Соль?",
        optionA: "Ми",
        optionB: "Си",
        optionC: "Ре",
        optionD: "Фа",
        correctOption: "optionD"
    },

    {
        question: "Какая нота находится на тон выше на 5 струне, относительно ноты Ля?",
        optionA: "Си",
        optionB: "Фа",
        optionC: "Соль",
        optionD: "До",
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
        remark = "Пока что не стоит переходить к следующей теме.."
        remarkColor = "red"
    }
    else if (playerScore >= 7 && playerScore < 9) {
        remark = "Думаю, стоит доучить материал.."
        remarkColor = "orange"
    }
    else if (playerScore >= 9) {
        remark = "Отлично! Идем дальше?"
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

