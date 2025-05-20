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

let AUDIO_SUCCESS = new Audio('./assets/audio/correct-choice.wav')

let AUDIO_FAIL = new Audio('./assets/audio/wrong-action.wav')