function init() {
    getQuizLenght()
    showQuestions()
}


function getQuizLenght() {
    document.getElementById("all_questions").innerHTML = questions.length;
}


function showQuestions() {

    if (gameIsOver()) {
        showEndScreen();
    } else {
        updateProgressBar();
        updateToNextQuestion();
    }
}


function gameIsOver() {
    return currentQuestion >= questions.length
}


function updateProgressBar() {
    let percent = (currentQuestion + 1) / questions.length;
    percent = Math.round(percent * 100);

    document.getElementById("progress-bar").textContent = `${percent}%`;
    document.getElementById("progress-bar").style.width = `${percent}%`;
    document.getElementById("progress-bar").setAttribute("aria-valuenow", `${percent}`);
}


function updateToNextQuestion() {
    let question = questions[currentQuestion];

    if (!question) {
        console.warn("Keine Frage für Index:", currentQuestion);
        return;
    }

    document.getElementById("question_text").innerHTML = question['question']
    document.getElementById("answer_a").innerHTML = question['answerA']
    document.getElementById("answer_b").innerHTML = question['answerB']
    document.getElementById("answer_c").innerHTML = question['answerC']
    document.getElementById("answer_d").innerHTML = question['answerD']

    document.getElementById("question-number").innerHTML = currentQuestion + 1

    document.getElementById("previous-button").disabled = currentQuestion === 0;
    document.getElementById("next-button").disabled = true;
}


function showEndScreen() {
    document.getElementById("end-quiz").style = "";
    document.getElementById("quiz").style = "display: none;";
    document.getElementById("amount-of-questions").innerHTML = questions.length;
    document.getElementById("amount-of-right-questions").innerHTML = rightQuestions;
    document.getElementById("tropy").style = "";
}


function answer(selection) {
    let question = questions[currentQuestion];
    let selectedQuestionCharacter = selection.slice(-1).toUpperCase();
    let idOfRightAnswer = `answer_${question['correctAnswer'].toLowerCase()}`;
    let idLetter = `letter_${selectedQuestionCharacter.toLowerCase()}`;
    let correctLetter = `letter_${question['correctAnswer'].toLowerCase()}`;

    if (rightAnswerSelected(selectedQuestionCharacter, question)) {
        returnGreenClass(selection, idLetter);
        rightQuestions++;
        AUDIO_SUCCESS.play();
    } else {
        returnRedAndRightClass(selection, idOfRightAnswer, idLetter);
        returnGreenClass(idOfRightAnswer, correctLetter);
        AUDIO_FAIL.play();
    }
    document.getElementById("next-button").disabled = false;
}


function rightAnswerSelected(selectedQuestionCharacter, question) {
    return selectedQuestionCharacter == question['correctAnswer']
}


function returnGreenClass(selection, idLetter) {
    document.getElementById(selection).parentNode.classList.add('background-light-green')
    document.getElementById(selection).classList.add('background-light-green')
    document.getElementById(idLetter).classList.add('bg-success')
}


function returnRedAndRightClass(selection, idOfRightAnswer, idLetter) {
    document.getElementById(selection, idOfRightAnswer).parentNode.classList.add('background-light-red')
    document.getElementById(idOfRightAnswer).parentNode.classList.add('background-light-green')
    document.getElementById(selection).classList.add('background-light-red')
    document.getElementById(idOfRightAnswer).classList.add('background-light-green')
    document.getElementById(idLetter).classList.add('bg-danger')
}


function nextQuestion() {
    currentQuestion++;
    document.getElementById("next-button").disabled = true;
    resetAnswerButtons()
    showQuestions()
}


function previousQuestion() {

    if (currentQuestion > 0) {
        document.getElementById("previous-button").disabled = false;
        currentQuestion--;
        showQuestions();
    }

    if (currentQuestion === 0) {
        document.getElementById("previous-button").disabled = true;
    } else {
        document.getElementById("previous-button").disabled = false;
    }

    resetAnswerButtons();
    showRightAnswer();
}


function showRightAnswer(idOfRightAnswer, correctLetter) {
    let question = questions[currentQuestion];
    idOfRightAnswer = `answer_${question['correctAnswer'].toLowerCase()}`;
    correctLetter = `letter_${question['correctAnswer'].toLowerCase()}`;

    document.getElementById(idOfRightAnswer).parentNode.classList.add('background-light-green')
    document.getElementById(idOfRightAnswer).classList.add('background-light-green')
    document.getElementById(correctLetter).classList.add('bg-success')
    document.getElementById("next-button").disabled = false;
}


function resetAnswerButtons() {
    const options = ['a', 'b', 'c', 'd'];

    options.forEach(option => {
        const answerElement = document.getElementById(`answer_${option}`);
        const letterElement = document.getElementById(`letter_${option}`);

        answerElement.parentNode.classList.remove('background-light-green', 'background-light-red');
        answerElement.classList.remove('background-light-green', 'background-light-red');

        letterElement.classList.remove('bg-success', 'bg-danger');
    });
}

function restartGame() {
    document.getElementById("end-quiz").style = "display: none;";
    document.getElementById("quiz").style = "";

    rightQuestions = 0;
    currentQuestion = 0;

    document.getElementById("tropy").style = "display: none;";

    init()
}