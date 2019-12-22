var startButton = document.getElementById("start-btn");
startButton.addEventListener("click", startGame);
var questionElement = document.getElementById("question");
var answerElement = document.getElementById ("answers");
var questionContainerElement = document.getElementById("question-container");
var nextButton = document.getElementById("next-btn");
let randomQuestions, currentQuestions
var time = document.getElementById("timer");
var intro = alert("Welcome to my Amazing Java quiz! Hope you enjoy it!");




nextButton.addEventListener('click', () => {
    currentQuestions++
    setNextQuestion()
})

function startGame(){
    console.log("Started");
    startButton.classList.add("hide");
    randomQuestions = questions.sort(() => Math.random() - .5) ///This is going to give us a random arraybecase we set the math.random to 50%. Saw this on stackOverflow.
    currentQuestions = 0
    questionContainerElement.classList.remove("hide")
    setNextQuestion()

}

    
     
  



function setNextQuestion() {
    resetState() 
    showQuestion(randomQuestions[currentQuestions]) 

}

function resetState() {
    nextButton.classList.add("hide")
    while(answerElement.firstChild) {
        answerElement.removeChild
        (answerElement.firstChild)
    }
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
        answerElement.appendChild(button)
    })
}

function selectAnswer(e) {  ///This will take the event as a parameter
    var selectedButton = e.target
    var correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerElement.children).forEach(button => { ///using the array function because I want the answer buttons to come back as an array. I looked up this function on a youtube tutorial video in how to make my answer buttons do a for loop.
        setStatusClass(button, button.dataset.correct)
    })
    if(randomQuestions.length > currentQuestions + 1) {
        nextButton.classList.remove("hide") 
    } else {
        startButton.innerText = "Restart"
    }
    
}



function setStatusClass(element, correct) {
    clearStatusClass(element) 
    if (correct) {
        element.classList.add("correct")
        
      } else {
        element.classList.add("wrong")
        
    }

}


function clearStatusClass(element) {
    element.classList.remove("correct")
    element.classList.remove("wrong")
}

var questions = [

    {
     question:"Inside which HTML element do we put the JavaScript?",
     choices: [ "<javascript>", "<script>", "<js>", "<scripting>"],
     answers: [
        {text: "<script>", correct: true },
        
        {text: "<javascript>", correct: false},
       
        {text: "<js>", correct: false},
       
        {text: "<scripting>", correct: false}
        
     ]
    },
   
    {
     question: "Where is the correct place to insert a Javascript?",
     choices: ["The <head> section", "The <body> section","Both the <head> section and the <body> section are correct"],
     answers: [
       {text: "The <head> section", correct: true},
       
       {text: "The <body> section", correct: false},
       
       {text: "Both the <head> section and the <body> section are correct", correct: false}
        ]
 },

  {
     question:" How do you write(Hello World) in an alert box?",
     choices: ["alert Box(Hello World)", "msgBox(Hello World)", "msg(Hello World)", "alert(Hello World)"],
     answers: [
        {text: "alert Box(Hello World)", correct: false},
        {text: "msgBox(Hello World)", correct: false},
        {text: "msg(Hello World)", correct: false},
        {text: "alert(Hello World)", correct: true},
       ]
  },

  {
    question: "How do you create a function in JavaScript?",
    choices: ["function= my function()", "function: my function()", "function myfunction()"],
    answers: [
        {text:"function myfunction()", correct: true},
        {text:"function= my function()", correct: false},
        {text:"function: my function()", correct: false}
    ]
 },
   

  {
 question: "What is the correct syntax for refering to an external script called (xxx.js)",
 choices: ["script src = (xxx.js)", "<script href = (xxx.js)", "<script name = (xxx.js>"],
 answers: [
     {text:"<script src = (xxx.js)", correct: true},
     {text: "<script href = (xxx.js>", correct: false},
     {text:"<script name = (xxx.js>", correct: false},
 ]
    
 },
    {
    question: "The external JavaScript file must contain the <script> tag.",
    choices: ["True", "False"],
    answers: [
        {text:"True", correct: true},
        {text:"False", correct: false},
    ]
 },
    {
        question: "How do you write an if statement in JavaScript?",
        choices: ["if (i==5)", "if i = 5 then", "if i == 5 then", "if i =5"],
        answers: [
            {text:"if(i==5)", correct: true},
            {text:"if i = 5 then", correct: false},
            {text:"if i ==5 then", correct: false},
            {text:"if i = 5",correct: false},
        ]
    }
]
