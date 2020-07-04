
//quiz variables
var rightAnswer = 0
var wrongAnswer = 0
var userName = ""
var highScore = 0
$("#questionDisplay").hide();
$("#resultsContainer").hide();

// timer utilities
let timeInMinutes = 2;
let time = timeInMinutes * 60;
let endGame = false;

const countdownEl = $("#countdown")[0];
displayLocalStorage()
//Quiz questions
const myQuestions = [
    {
        question: "JavaScript was published by",
        answers: [
            "Netscape",
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
        answers: [
            "style updates for html",
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

//Questions display on start click and hides the start button
$("#start").on("click",function(){

$("#questionDisplay").show();
$("#start").hide()
buildQuiz()

})

//Checks users choice to be right or wrong
//Timer takes 10 seconds away for incorrect
//Stores right and wrong answers
//if timer runs out or user answers all questions, shows results screen
$(".userAnswer").on("click",function(){
    var userChoice = $(this).attr("data-value")
    if(userChoice== myQuestions[currentQuestion].correctAnswer){
    rightAnswer++
    }
    else{
        wrongAnswer++
        time -= 10
    }

    if(currentQuestion<myQuestions.length-1){
        currentQuestion++;
        buildQuiz()
    }
    else{
        endGame = true
        displayResults()
    }
})

// Quiz timer that begins on the start click
$("#start").on("click", function(){
    let timeStop = setInterval(() => {
    if (time <= 0 || endGame){
    alert("Quiz is done!");
    displayResults();
    return clearInterval(timeStop);
    };
    time--
    //Timer display, adds a zero if less than 10 seconds
    let minutes = Math.floor(time / 60);
    let seconds = time % 60;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    countdownEl.innerHTML = `${minutes}:${seconds}`;
    }, 1000);
});

//Saves user initials and score and stores them in local storage
$("#saveUser").on("click", function(){
    var user = $("#initials").val();
    if( highScore < rightAnswer){
    localStorage.setItem("user", user);
    localStorage.setItem("score", rightAnswer);
    displayLocalStorage();
    }
    else{
        alert("Sorry, you didn't beat the previous high score!");
    }
})

//Displays the score and initials from local storage and puts them on the page
function displayLocalStorage(){
    userName = localStorage.getItem("user") || "glad you decided to play";
    highScore = localStorage.getItem("score") || 0;
    $("#userName").html(`<h4>Previous User : ${userName}</h4>`);
    $("#userScore").html(`<h4>Previous HighScore: ${highScore}`);
}

//Displays how many right and wrong questions on the page
function displayResults(){
    console.log(rightAnswer, wrongAnswer)
    $("#questionDisplay").hide();
    $("#resultsContainer").show();
    $("#userScore").html("Right = " + rightAnswer + " Wrong = " + wrongAnswer)
}

//Runs through the quiz questions
function buildQuiz() {
        $("#question").html(myQuestions[currentQuestion].question)
        for(let i=0;i<3;i++){
            $("#option-"+(i+1)).html(myQuestions[currentQuestion].answers[i])
        }
    }


