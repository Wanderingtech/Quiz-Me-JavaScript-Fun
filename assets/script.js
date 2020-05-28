//countdown timer for quiz

const startingMinutes = 2;
let time = startingMinutes *60;

const countdownEl = document.getElementById('countdown');

document.getElementById('start').onclick = "function updateCountdown(); function buildQuiz()"; {

   var i = setInterval(updateCountdown, 1000);

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
}

        function buildQuiz(){
            // variable to store the HTML output
            const output = [];
        
            // for each question...
            myQuestions.forEach(
            (currentQuestion, questionNumber) => {
        
                // variable to store the list of possible answers
                const answers = [];
        
                // and for each available answer...
                for(letter in currentQuestion.answers){
        
                // ...add an HTML radio button
                answers.push(
                    `<label>
                    <input type="radio" name="question${questionNumber}" value="${letter}">
                    ${letter} :
                    ${currentQuestion.answers[letter]}
                    </label>`
                );
                }
        
                // add this question and its answers to the output
                output.push(
                `<div class="question"> ${currentQuestion.question} </div>
                <div class="answers"> ${answers.join("")} </div>`
                );
              }
            );
        
            // finally combine our output list into one string of HTML and put it on the page
            quizContainer.innerHTML = output.join('');
        }

        function showResults() {
                // gather answer containers from our quiz
            const answerContainers = quizContainer.querySelectorAll('.answers');
        
            // keep track of user's answers
            let numCorrect = 0;
        
            // for each question...
            myQuestions.forEach( (currentQuestion, questionNumber) => {
        
            // find selected answer
            const answerContainer = answerContainers[questionNumber];
            const selector = `input[name=question${questionNumber}]:checked`;
            const userAnswer = (answerContainer.querySelector(selector) || {}).value;
        
            // if answer is correct
            if(userAnswer === currentQuestion.correctAnswer){
                // add to the number of correct answers
                numCorrect++;
        }
        });
        resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
    }

    function showSlide(n) {
        slides[currentSlide].classList.remove('active-slide');
        slides[n].classList.add('active-slide');
        currentSlide = n;
        if(currentSlide === 0){
            previousButton.style.display = 'none';
        }
        else{
            previousButton.style.display = 'inline-block';
        }
        if(currentSlide === slides.length-1){
            nextButton.style.display = 'none';
            submitButton.style.display = 'inline-block';
        }
        else{
            nextButton.style.display = 'inline-block';
            submitButton.style.display = 'none';
        }
    }

        function showNextSlide() {
            showSlide(currentSlide + 1);
        }
        
        function showPreviousSlide() {
            showSlide(currentSlide - 1);
        }

            // show number of correct answers out of total
            resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
    


    //variables
    var quizContainer = document.getElementById('quiz');
    var resultsContainer = document.getElementById('results');
    var submitButton = document.getElementById('submit');
    
    const myQuestions = [
        {
            question: "JavaScript was published by",
            answers: {
            a: "Twitter",
            b: "MySpace",
            c: "Facebook"
            },
            correctAnswer: "a"
        },
        {
            question: "To initiate a function, you use",
            answers: {
            a: "()",
            b: "''",
            c: "{}"
            },
            correctAnswer: "a"
        },
        {
            question: "What would you use to randomly select a number?",
            answers: {
            a: "floor.",
            b: "Math.random",
            c: "Function.random"
            },
            correctAnswer: "b"
        },
        {
            question: "What is innerHTML used for?",
            answers: {
                a: "style updates for html",
                b: "a change you make in the html file",
                c: "making a change in JS that appears in html"
            },
            correctAnswer: "c"
            },
            {
            question: "What does appendChild do?",
            answers: {
                a: "Adds something as a child element to a larger element in your html",
                b: "adds a child icon to your page",
                c: "changes an existing child element"
            },
            correctAnswer: "a"
            },
            {
            question: "What makes something happen when clicked?",
            answers: {
                a: "onWard",
                b: "onNow",
                c: "onClick"
            },
            correctAnswer: "c"
            }
        ];
    buildQuiz();
        
    
    // Pagination
    const previousButton = document.getElementById("previous");
    const nextButton = document.getElementById("next");
    const slides = document.querySelectorAll(".slide");
    let currentSlide = 0;

    // Show the first slide
    showSlide(currentSlide);

    // Event listeners
    submitButton.addEventListener('click', showResults);
    previousButton.addEventListener("click", showPreviousSlide);
    nextButton.addEventListener("click", showNextSlide);
  ;

