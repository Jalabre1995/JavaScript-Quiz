var startButton = document.getElementById("start-btn");
startButton.addEventListener("click", startGame)
var questionElement = document.getElementById("question")
var answerElement = document.getElementById ("answers")
var questionContainerElement = document.getElementById("question-container")

let randomQuestions, currentQuestions

function startGame(){
    console.log("Started");
    startButton.classList.add("hide");
    randomQuestions = questions.sort(() => Math.random() - .5) ///This is going to give us a random arraybecase we set the math.random to 50%. Saw this on stackOverflow.
    currentQuestions = 0
    questionContainerElement.classList.remove("hide")
    setNextQuestion()
    

}

function setNextQuestion() {
    showQuestion(randomQuestions[currentQuestions])

}

function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        var button = document.createElement("button")
        button.innerText = answer.text
        button.classList.add("btn") 
        if (answer.correct) {
        button.dataset.correct = answer.correct ///this will set it to only if the answers are correct. If we set this to false answers as well. Itwould be impossible to know what the real answer is. 
        }
        button.addEventListener("click", selectAnswer)
        answerButtonElement.appendChild(button)
    })
}

function selectAnswer() {
    

}



var questions = [

    {
     question:"Inside which HTML element do we put the JavaScript?",
     choices: [ "<javascript>", "<script>", "<js>", "<scripting>"],
     answer: [
        {text: "<script>", correct: true },
        {text: "<javascript>", correct: false},
        {text: "<js>", correct: false},
        {text: "<scripting>", correct: false}
     ]
    },
   
    {
     question: "Where is the correct place to insert a Javascript?",
     choices: ["The <head> section", "The <body> section","Both the <head> section and the <body> section are correct"],
     answer: [
       {text: "The <head> section", correct: true},
       {text: "The <body> section", correct: false},
       {text: "Both the <head> section and the <body> section are correct", correct: false}
        ]
 },

  {
     question:" How do you write(Hello World) in an alert box?",
     choices: ["alert Box(Hello World)", "msgBox(Hello World)", "msg(Hello World)", "alert(Hello World)"],
     answer: [
        {text: "alert Box(Hello World)", correct: false},
        {text: "msgBox(Hello World)", correct: false},
        {text: "msg(Hello World)", correct: false},
        {text: "alert(Hello World)", correct: true},
       ]
  },

  {
    question: "How do you create a function in JavaScript?",
    choices: ["function= my function()", "function: my function()", "function myfunction()"],
    answer: [
        {text:"function myfunction()", correct: true},
        {text:"function= my function()", correct: false},
        {text:"function: my function()", correct: false}
    ]
 },
   
]

