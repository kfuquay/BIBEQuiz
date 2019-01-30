'use strict';

//SET VARIABLES
const STORE = [
    {
        question: 'What is the highest point in Big Bend National Park?',
        answerOne: 'Toll Mountain',
        answerTwo: 'Emory Peak', 
        answerThree:'Lost Mine Peak',
        answerFour: 'Casa Grande Peak',
        correctAnswer: 'Emory Peak',
        response: 'At an elevation of 7,825 ft (2,385 m) Emory Peak is the highest point in Big Bend National Park.'
    },
    {
        question: 'Javelinas are most similar to what type of animal?',
        answerOne: 'mountain lion', 
        answerTwo: 'wild boar', 
        answerThree: 'warbler', 
        answerFour: 'elk',
        correctAnswer: 'wild boar',
        response: `Javelinas (also known as collared peccary) are most similar to wild boars - they're a pig-like hoofed mammal of the Tayassuidae (New World Pigs) family`
    }, 
    {
        question: 'Big Bend is part of the',
        answerOne: 'Sonoran Desert',
        answerTwo: 'Great Basin Desert',
        answerThree: 'Chihuahuan Desert',
        answerFour: 'Mojave Desert',
        correctAnswer: 'Chihuahuan Desert',
        response: 'Big Bend National Park contains the most representative expample of the Chihuahuan Desert ecosystem in the United States'
    },
    {
        question: 'Which of the following is an indicator plant species of the Chihuahuan desert?',
        answerOne: 'Sagebrush',
        answerTwo: 'Lechuguilla',
        answerThree: 'Seguaro Cactus',
        answerFour: 'Yellow Palo Verde',
        correctAnswer: 'Lechuguilla',
        response: 'Agave lechuguilla is found only in the Chihuahuan desert - translated from Spanish, lechuguilla means "little lettuce"'
    },
    {
        question: 'How large is Big Bend?',
        answerOne: 'About 300,000 acres',
        answerTwo: 'Over 800,000 acres',
        answerThree: 'Over 100,000 acres',
        answerFour: 'Under 500,000 acres',
        correctAnswer: 'Over 800,000 acres',
        response: 'BBNP encompasses an area of 801,163 acres (3,242 square km)'
    },
    {
        question: 'Big Bend contains how many river canyons?',
        answerOne: '3',
        answerTwo: '2',
        answerThree: '5',
        answerFour: ' 4',
        correctAnswer: '3',
        response: 'Big Bend contains three river canyons - Santa Elena, Mariscal, and Boquillas'
    },
    {
        question: 'Big Bend was designated as a "dark sky park" in what year?',
        answerOne: '1955',
        answerTwo: '1987',
        answerThree: '1999',
        answerFour: '2012',
        correctAnswer: '2012',
        response: 'The International Dark Sky Association designated Big Bend National Park as a "dark sky park" in 2012 - a dark sky park is land recognized as "possessing an exceptional or distinguished quality of starry nights"'
    },
    {
        question: 'The "Outer Mountain Loop" system of trails is ____ miles long',
        answerOne: '23',
        answerTwo: '30',
        answerThree: '17',
        answerFour: '42',
        correctAnswer: '30',
        response: 'The Outer Mountain Loop is a 30-mile circuit that combines five different trails taking the hiker through the Chisos Mountains and down to the surrounding Chihuahuan Desert'
    },
    {
        question: 'What year did Big Bend become a National Park?',
        answerOne: '1935',
        answerTwo: '1950',
        answerThree: '1949',
        answerFour: '1944',
        correctAnswer: '1944',
        response: 'Though enabling legislation was passed as early as 1935, Big Bend did not officially become a National Park until June 12, 1944(just one week after D-Day)'
    },
    {
        question: 'What is the "Big Bend" anyway?',
        answerOne: 'a reference to the shape of the Chisos Mountains',
        answerTwo: 'a nickname for the Cretaceous Era Strata found throughout the park',
        answerThree: 'a bend in the Rio Grande river',
        answerFour: 'the visible scar left on the face of Dog Canyon after a significant rock-fall',
        correctAnswer: 'a bend in the Rio Grande river',
        response: 'Big Bend is names after a bend in the Rio Grande River, of which the park administers over 115 miles.'
    }
];

let currentScore = 0;
let currentQuestion = 0;

//DEFINE FUNCTIONS
function handleNext() {
    $('.nextButton').on('click', function(e) {
        e.preventDefault();
        console.log('next button');
        handleQuestions();
    });
}

function generateCorrectFeedback() {
    currentScore++;
    handleScoreData();
    $('form').fadeOut(300)
    $('.quizBox').html(`
    <h2>Your Answer Was Correct!</h2>
    <p class="response">${STORE[currentQuestion].response}</p>
    <button type="submit" class="nextButton button">»</button>`);
    currentQuestion++;
    handleNext();
}

function generateIncorrectFeedback() {
    console.log('incorrect feedback');
    $('form').fadeOut(300)
    $('.quizBox').html(`
    <h2>Your Answer Was Incorrect!</h2>
    <p class="response">${STORE[currentQuestion].response}</p>
    <button type="submit" class="nextButton button">»</button>`);
    currentQuestion++;
    handleNext();
}

function handleSubmit () {
    $('form').on('submit', function (e) {
      e.preventDefault();
      const answer = $('input:checked').val();
      const correctAnswer = `${STORE[currentQuestion].correctAnswer}`;

      if (answer === correctAnswer) {
        console.log('correct');
        generateCorrectFeedback();
      } else {
        console.log('incorrect');
        generateIncorrectFeedback();
      }
    });
}

function handleScoreData() {
    $('#questionCount').text(`Question ${currentQuestion + 1}/${STORE.length}`);

    $('#score').text(`Score ${currentScore}/${STORE.length}`);
}

function handleQuestions() {
    console.log('Questions Handled');
    
    if (currentQuestion < STORE.length) {
        handleScoreData();
        $('.quizBox').html(`
        <form>
            <fieldset>
                <legend class="question">${STORE[currentQuestion].question}</legend>
                <input type="radio" name="question" id="answer-one" value="${STORE[currentQuestion].answerOne}" checked>
                <label for="answer-one">${STORE[currentQuestion].answerOne}</label>
                <br>
                <input type="radio" name="question" id="answer-two" value="${STORE[currentQuestion].answerTwo}">
                <label for="answer-two">${STORE[currentQuestion].answerTwo}</label>
                <br>
                <input type="radio" name="question" id="answer-three" value="${STORE[currentQuestion].answerThree}">
                <label for="answer-three">${STORE[currentQuestion].answerThree}</label>
                <br>
                <input type="radio" name="question" id="answer-four" value="${STORE[currentQuestion].answerFour}">
                <label for="answer-four">${STORE[currentQuestion].answerFour}</label>
            </fieldset>
        <button type="submit" class="submitButton button" id="submitButton">»</button>
        </form>
        `);
        handleSubmit();
    } else {
        $('.quizBox').html(`
            <h2>You have completed the quiz!</h2>
            <p class="response">Your score was ${currentScore} out of 10</p>
            <button type="button" class="restartButton button">↺</button>
        `);
        $('.restartButton').on('click', function() {
            location.reload();
        });
        
    }
};

function handleStart() {
    //LISTEN FOR CLICKS ON START BUTTON
    $('.startButton').on('click', function() {
        //REMOVE START BUTTON FROM DISPLAY
        $('.startButton').fadeOut(300);
        handleQuestions();
    });
};

handleStart();