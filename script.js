let questions = [
    {
        question: "Was bedeutet HTML?",
        answerA: "HyperText Markup Language",
        answerB: "HighText Machine Language",
        answerC: "HyperTool Multi Language",
        answerD: "HomeTool Markup Language",
        correctAnswer: "A"
    },
    {
        question: "Was macht ein Browser?",
        answerA: "Übersetzt Code in Maschinensprache",
        answerB: "Sendet Daten an den Server",
        answerC: "Zeigt Webseiten an",
        answerD: "Speichert Datenbanken",
        correctAnswer: "C"
    },
    {
        question: "Welche Sprache wird hauptsächlich für Webseiten-Layout verwendet?",
        answerA: "Python",
        answerB: "CSS",
        answerC: "SQL",
        answerD: "Java",
        correctAnswer: "B"
    },
    {
        question: "Was ist eine Variable in der Programmierung?",
        answerA: "Ein Datenspeicher",
        answerB: "Ein Stil-Element",
        answerC: "Ein Gerätetreiber",
        answerD: "Ein Server",
        correctAnswer: "A"
    },
    {
        question: "Welche dieser Sprachen ist keine Programmiersprache?",
        answerA: "HTML",
        answerB: "JavaScript",
        answerC: "Python",
        answerD: "C++",
        correctAnswer: "A"
    },
    {
        question: "Wofür steht CSS?",
        answerA: "Creative Style System",
        answerB: "Cascading Style Sheets",
        answerC: "Computer Style Syntax",
        answerD: "Control Sheet Script",
        correctAnswer: "B"
    },
    {
        question: "Was ist ein Array?",
        answerA: "Ein Programm",
        answerB: "Ein Datentyp für Listen",
        answerC: "Ein Fehler",
        answerD: "Ein Server",
        correctAnswer: "B"
    },
    {
        question: "Welcher Operator vergleicht in JavaScript Werte und Typen?",
        answerA: "==",
        answerB: "=",
        answerC: "===",
        answerD: "!=",
        correctAnswer: "C"
    },
    {
        question: "Was bedeutet Frontend in der Webentwicklung?",
        answerA: "Serverlogik",
        answerB: "Datenbankzugriff",
        answerC: "Benutzeroberfläche",
        answerD: "Fehlermeldungen",
        correctAnswer: "C"
    },
    {
        question: "Welche dieser Methoden ist keine Array-Methode in JavaScript?",
        answerA: "push()",
        answerB: "pop()",
        answerC: "split()",
        answerD: "map()",
        correctAnswer: "C"
    }
];

let rightQuestions = 0;

let currentQuestion = 0;


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
        let percent = (currentQuestion + 1)/ questions.length;
        percent = Math.round(percent*100);

        document.getElementById("progress-bar").textContent = `${percent}%`;
        document.getElementById("progress-bar").style.width = `${percent}%`;
        document.getElementById("progress-bar").setAttribute("aria-valuenow", `${percent}`);

        let question = questions[currentQuestion];

        document.getElementById("question_text").innerHTML = question['question']
        document.getElementById("answer_a").innerHTML = question['answerA']
        document.getElementById("answer_b").innerHTML = question['answerB']
        document.getElementById("answer_c").innerHTML = question['answerC']
        document.getElementById("answer_d").innerHTML = question['answerD']

        document.getElementById("question-number").innerHTML = currentQuestion + 1
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
    } else {
        returnRedAndRightClass(selection, idOfRightAnswer, idLetter);
        returnGreenClass(idOfRightAnswer, correctLetter);
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
}


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