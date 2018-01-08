// -----------------------------------*----------------------------------- //
// My Solution
/*
// Question Constructor
var Question = function(question, answers, correctAnswer) {
    this.question = question;
    this.answers = answers;
    this.correctAnswer = correctAnswer
}

// Make some questions
var question1 = new Question("What is the capital of the UK?",
                            ["1: Cardiff", "2: London", "3: Blackpool"], 2);
var question2 = new Question("Milk before or after hot water?",
                            ["1: Before", "2: After", "3: Who Cares?"], 3);
var question3 = new Question("The best biscuit is?",
                            ["1: Custard Cream", "2: Bourbon", "3: Rich Tea"], 2);

// Store them in an array
var questions = [question1, question2, question3];

var score = 0;


function pickQuestion(questionsArr) {
    var numGen = Math.floor(Math.random() * questionsArr.length)
    var question = questionsArr[numGen]
    return question
}

function displayQuestion(questionObj) {
    console.log(questionObj.question)
    for(var i = 0; i < questionObj.answers.length; i++) {
        console.log(questionObj.answers[i])
    }
}

function promptForAnswer(questionObj) {
    var answer = prompt("Enter your answer here:");
    if(answer == questionObj.correctAnswer) {
        console.log("Correct")
        score++
    } else {
        console.log("Very Wrong.")
    }
}

function removeQuestion(questionsArr, questionObj) {
    var index = questionsArr.indexOf(questionObj);
    if (index > -1) {
        questionsArr.splice(index, 1);
    }
}

function quiz(questionsArr) {
    while(questionsArr.length > 0) {
        question = pickQuestion(questionsArr);
        displayQuestion(question);
        promptForAnswer(question);
        removeQuestion(questionsArr, question);
        console.log("\n")
    }
    console.log("All questions have been answered. Thanks!")
    console.log("Your score is " + score + "!")
}

quiz(questions);
*/
// -----------------------------------*----------------------------------- //
// Course Solution

(function() {

    function Question(question, answers, correct) {
        this.question = question;
        this.answers = answers;
        this.correct = correct;
    }

    var q1 = new Question("Is JS the coolest language?",
                        ["Yes", "No", "No, it's python."], 2);
    var q2 = new Question("Milk before or after hot water?",
                        ["Before", "After", "Who Cares?"], 2);
    var q3 = new Question("The best biscuit is?",
                        ["Custard Cream", "Bourbon", "Rich Tea"], 1);

    Question.prototype.displayQuestion = function() {
        console.log(this.question);

        for(var i = 0; i < this.answers.length; i++) {
            console.log(i + ": " + this.answers[i]);
        }
    }

    Question.prototype.checkAnswer = function(ans, callback) {
        var score;
        
        if(ans === this.correct) {
            console.log("Correct answer!");
            score = callback(true);
        } else {
            console.log("Wrong answer. Try again :)")
            score = callback(false);
        }
        
        this.displayScore(score);
    }
    
    Question.prototype.displayScore = function(score) {
        console.log("Your current score is " + score);
        console.log("----------------------------");
    }


    var questions = [q1, q2, q3];

    function score() {
        var score = 0;
        return function(correct) {
            if(correct) {
                score++;
            }
            return score;
        }
    }

    var keepScore = score();

    function nextQuestion() {

        var n = Math.floor(Math.random() * questions.length);

        questions[n].displayQuestion();

        var answer = prompt("Please select the correct answer.");

        if(answer !== 'exit') {
            questions[n].checkAnswer(parseInt(answer), keepScore);
            nextQuestion();
        }

    }

    nextQuestion();

})();
