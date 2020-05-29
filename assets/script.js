//countdown timer for quiz

const startingMinutes = 2;
let time = startingMinutes * 60;
//variables
// const countdownEl = document.getElementById('countdown');
var rightAnswer = 0
var wrongAnswer = 0
var userName = ""
var highScore = 0
$("#questionDisplay").hide();
$("#resultsContainer").hide();

const myQuestions = [
    {
        question: "JavaScript was published by",
        answers: [
            "Twitter",
             "MySpace",
             "Facebook"
        ],
        correctAnswer: 0
    },
    {
        question: "To initiate a function, you use",
        answers: [
             "()",
             "''",
             "{}"
        ],
        correctAnswer: 0
    },
    {
        question: "What would you use to randomly select a number?",
        answers: [
            "floor.",
            "Math.random",
             "Function.random"
        ],
        correctAnswer: 1
    },
    {
        question: "What is innerHTML used for?",
        answers: ["style updates for html",
            "a change you make in the html file",
            "making a change in JS that appears in html"
        ],
        correctAnswer: 2
    },
    {
        question: "What does appendChild do?",
        answers: [
            "Adds something as a child element to a larger element in your html",
            "adds a child icon to your page",
            "changes an existing child element"
        ],
        correctAnswer: 0
    },
    {
        question: "What makes something happen when clicked?",
        answers: [
            "onWard",
            "onNow",
            "onClick"
        ],
        correctAnswer: 2
    }
];
let currentQuestion = 0;

displayLocalStorage()

$("#start").on("click",function(){
    
$("#questionDisplay").show();
$("#start").hide()
buildQuiz()
})

$(".userAnswer").on("click",function(){
    var userChoice = $(this).attr("data-value")
    console.log(userChoice)
    if(userChoice== myQuestions[currentQuestion].correctAnswer){
    rightAnswer++
    }
    else{
        wrongAnswer++
    }
    if(currentQuestion<myQuestions.length-1){
        currentQuestion++;
        buildQuiz()
    }
    else{
        displayResults()
    }
})

$("#saveUser").on("click", function(){
    var user = $("#initials").val()
    localStorage.setItem("user", user)
    localStorage.setItem("score", rightAnswer)
    displayLocalStorage()
})
function displayLocalStorage(){
    userName = localStorage.getItem("user") || "glad you decided to play"
    highScore = localStorage.getItem("score") || 0
    $("#userName").html(userName)
    $("#userScore").html(highScore)
}
function displayResults(){
    console.log(rightAnswer, wrongAnswer)
    $("#questionDisplay").hide();
    $("#resultsContainer").show();
    $("#userScore").html("Wins= " + rightAnswer + "Losses= " + wrongAnswer)
 
}

function updateCountdown() {
    const minutes = Math.floor(time / 60);

    let seconds = time % 60;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    countdownEl.innerHTML = `${minutes}:${seconds}`;
    time--;

    if (time < 0) {
        alert("Time's Up!");
        clearInterval(i);
    }
}

function buildQuiz() {

        $("#question").html(myQuestions[currentQuestion].question)
        for(let i=0;i<3;i++){
            $("#option-"+(i+1)).html(myQuestions[currentQuestion].answers[i])
            console.log("#option-"+(i+1),myQuestions[currentQuestion].answers[i]);
        }
    
    }


