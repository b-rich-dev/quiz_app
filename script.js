function init() {
    getQuizLenght()
    showCurrentQuestions()
}


function getQuizLenght() {
    document.getElementById("all_questions").innerHTML = questions.length;
}


function showCurrentQuestions() {

    if (currentQuestion >= questions.length) {
        document.getElementById("end-quiz").style = "";
        document.getElementById("quiz").style = "display: none;";
        document.getElementById("amount-of-questions").innerHTML = questions.length;
        document.getElementById("amount-of-right-questions").innerHTML = rightQuestions;
        document.getElementById("tropy").style = "";
    } else {
        let percent = (currentQuestion + 1) / questions.length;
        percent = Math.round(percent * 100);

        document.getElementById("progress-bar").textContent = `${percent}%`;
        document.getElementById("progress-bar").style.width = `${percent}%`;
        document.getElementById("progress-bar").setAttribute("aria-valuenow", `${percent}`);

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
        document.getElementById("next-button").disabled = currentQuestion >= questions.length - 1;
        document.getElementById("next-button").disabled = true;
    }
}


function answer(selection) {
    let question = questions[currentQuestion];
    let selectedQuestionCharacter = selection.slice(-1).toUpperCase();
    let idOfRightAnswer = `answer_${question['correctAnswer'].toLowerCase()}`;
    let idLetter = `letter_${selectedQuestionCharacter.toLowerCase()}`;
    let correctLetter = `letter_${question['correctAnswer'].toLowerCase()}`;

    if (selectedQuestionCharacter == question['correctAnswer']) {
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
    showCurrentQuestions()
    console.log(currentQuestion);
}


// function previousQuestion() {
//     // document.getElementById("previous-button").disabled = false;
//     // currentQuestion--;
//     // showCurrentQuestions()
//     if (currentQuestion >= 0) {
//         document.getElementById("previous-button").disabled = false;
//         currentQuestion--;
//         showCurrentQuestions()
        
//     } 
    
//     if (currentQuestion === 0) {
//         document.getElementById("previous-button").disabled = true;
//     }
// }

function previousQuestion() {
    console.log("currentQuestion vor Klick:", currentQuestion);
    
    if (currentQuestion > 0) {
        document.getElementById("previous-button").disabled = false;
        currentQuestion--;
        showCurrentQuestions();
    }

    // Button deaktivieren, wenn wir am Anfang sind
    if (currentQuestion === 0) {
        document.getElementById("previous-button").disabled = true;
    } else {
        document.getElementById("previous-button").disabled = false;
    }
}
console.log(currentQuestion);

function resetAnswerButtons() {
    document.getElementById("answer_a").parentNode.classList.remove('background-light-green')
    document.getElementById("answer_a").classList.remove('background-light-green')
    document.getElementById("answer_a").parentNode.classList.remove('background-light-red')
    document.getElementById("answer_a").classList.remove('background-light-red')

    document.getElementById("letter_a").classList.remove('bg-success')
    document.getElementById("letter_a").classList.remove('bg-danger')

    document.getElementById("answer_b").parentNode.classList.remove('background-light-green')
    document.getElementById("answer_b").classList.remove('background-light-green')
    document.getElementById("answer_b").parentNode.classList.remove('background-light-red')
    document.getElementById("answer_b").classList.remove('background-light-red')

    document.getElementById("letter_b").classList.remove('bg-success')
    document.getElementById("letter_b").classList.remove('bg-danger')

    document.getElementById("answer_c").parentNode.classList.remove('background-light-green')
    document.getElementById("answer_c").classList.remove('background-light-green')
    document.getElementById("answer_c").parentNode.classList.remove('background-light-red')
    document.getElementById("answer_c").classList.remove('background-light-red')

    document.getElementById("letter_c").classList.remove('bg-success')
    document.getElementById("letter_c").classList.remove('bg-danger')

    document.getElementById("answer_d").parentNode.classList.remove('background-light-green')
    document.getElementById("answer_d").classList.remove('background-light-green')
    document.getElementById("answer_d").parentNode.classList.remove('background-light-red')
    document.getElementById("answer_d").classList.remove('background-light-red')

    document.getElementById("letter_d").classList.remove('bg-success')
    document.getElementById("letter_d").classList.remove('bg-danger')
}


function restartGame() {
    document.getElementById("end-quiz").style = "display: none;";
    document.getElementById("quiz").style = "";

    rightQuestions = 0;
    currentQuestion = 0;

    document.getElementById("tropy").style = "display: none;";

    init()
}