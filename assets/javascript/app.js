//Question list
var question = [{
    image: src = "assets/images/amy.jpg",
    answers: ["jessica", "mary", "amy", "alexa"],
    correctAnswer: "amy"
}, {
    image: src = "assets/images/bender.jpg",
    answers: ["bender", "fender", "grinder", "driller"],
    correctAnswer: "bender"
}, {
    image: src = "assets/images/brian.jpg",
    answers: ["brian", "greg", "jacob", "derek"],
    correctAnswer: "brian"
}, {
    image: src = "assets/images/cartman.jpg",
    answers: ["kyle", "kenny", "cartman", "stan"],
    correctAnswer: "cartman"
}, {
    image: src = "assets/images/chris.jpg",
    answers: ["chris", "christian", "christopher", "bob"],
    correctAnswer: "chris"
}, {
    image: src = "assets/images/goku.jpg",
    answers: ["goku", "frieza", "beerus", "cell"],
    correctAnswer: "goku"
}, {
    image: src = "assets/images/kenny.jpg",
    answers: ["kyle", "kenny", "cartman", "stan"],
    correctAnswer: "kenny"
}, {
    image: src = "assets/images/kyle.jpg",
    answers: ["kyle", "kenny", "cartman", "stan"],
    correctAnswer: "kyle"
}, {
    image: src = "assets/images/leela.jpg",
    answers: ["jessica", "leela", "amy", "alexa"],
    correctAnswer: "leela"
}, {
    image: src = "assets/images/lois.jpg",
    answers: ["jessica", "mary", "lois", "alexa"],
    correctAnswer: "lois"
}, {
    image: src = "assets/images/meg.jpg",
    answers: ["meg", "mary", "amy", "alexa"],
    correctAnswer: "meg"
}, {
    image: src = "assets/images/morty.jpg",
    answers: ["morty", "rick", "drew", "brock"],
    correctAnswer: "morty"
}, {
    image: src = "assets/images/peter.jpg",
    answers: ["tyler", "justin", "wiley", "peter"],
    correctAnswer: "peter"
}, {
    image: src = "assets/images/phillip.jpg",
    answers: ["drew", "gatlin", "philip", "ty"],
    correctAnswer: "philip"
}, {
    image: src = "assets/images/piccolo.jpg",
    answers: ["goku", "goten", "trunks", "piccolo"],
    correctAnswer: "piccolo"
}, {
    image: src = "assets/images/professor.jpg",
    answers: ["professor", "doctor", "physician", "surgeon"],
    correctAnswer: "professor"
}, {
    image: src = "assets/images/rick.jpg",
    answers: ["morty", "rick", "butch", "steve"],
    correctAnswer: "rick"
}, {
    image: src = "assets/images/stan.jpg",
    answers: ["kyle", "kenny", "cartman", "stan"],
    correctAnswer: "stan"
}, {
    image: src = "assets/images/stewie.jpg",
    answers: ["peter", "brian", "stewie", "chris"],
    correctAnswer: "stewie"
}, {
    image: src = "assets/images/vegeta.jpg",
    answers: ["goku", "vegeta", "trunks", "goten"],
    correctAnswer: "vegeta"
}, {
    image: src = "assets/images/zoidburg.jpg",
    answers: ["professor", "bender", "philip", "zoidburg"],
    correctAnswer: "zoidburg"
}]

var timer;
var counterStartValue = 20;

var game = {

    question: question,
    currentQuestion: 0,
    counter: 20,
    correct: 0,
    incorrect: 0,

    clock: function() {
        game.counter -= 1;
        $("#timer-slot").text("Time left " + game.counter + "seconds");
        if (game.counter === 0) {
            game.timeUp();
        }
    },

    loadQuestion: function() {
        timer = setInterval(game.clock, 1000);

        $("#container-questions").empty();
        $("#buttons").empty();
        $("#results-log").empty(); //added
        $("#container-questions").html("<img id='imageQuestion' src=" + question[this.currentQuestion].image + ">");
        

        for (var i = 0; i < question[this.currentQuestion].answers.length; i++) {
            $("#buttons").append("<button class='answer-button' id='button' data-name='" + 
            question[this.currentQuestion].answers[i] + "'>" + 
            question[this.currentQuestion].answers[i] + "</button>");
        }
    },

    nextQuestion: function() {
        game.counter = counterStartValue;
        $("#timer-slot").text("Time left: " + game.counter + "seconds");
        game.currentQuestion += 1;
        game.loadQuestion();
    },

    timeUp: function() {
        clearInterval(timer);

        $("#timer-slot").html("Time left: " + game.counter + "seconds");
        if (game.currentQuestion === question.length - 1) {
            setTimeout(game.results, 10 * 1000);
        }
        else {
            setTimeout(game.nextQuestion, 2 * 1000);
        }
    },

    results: function() {
        clearInterval(timer);

        $("#results").append("<h3>Correct: " + game.correct + "</h3>");
        $("#results").append("<h3>Incorrect: " + game.incorrect + "</h3>");
    },

    clicked: function(e) {
        clearInterval(timer);
        if ($(e.target).attr("data-name") === question[this.currentQuestion].correctAnswer) {
            this.answeredCorrectly();
        }
        else {
            this.answeredIncorrectly();
        }
    },

    answeredIncorrectly: function() {
        game.incorrect += 1;
        clearInterval(timer);

        $("#results-log").html("<h3>That is wrong!</h3>");
        $("#results-log").append("<h3> The correct answer is: " + question[game.currentQuestion].correctAnswer + "</h3>");
    
        if (game.currentQuestion === question.length - 1) {
            setTimeout(game.results, 10 * 1000);
        }
        else {
            setTimeout(game.nextQuestion, 2 * 1000);
        }
    },

    answeredCorrectly: function() {
        clearInterval(timer);

        game.correct += 1;

        $("#results-log").html("<h3>That is correct!</h3>");

        if (game.currentQuestion === question.length - 1) {
            setTimeout(game.results, 10 * 1000);
        }
        else {
            setTimeout(game.nextQuestion, 2 * 1000);
        }
    },

    reset: function() {
        this.currentQuestion = 0;
        this.counter = counterStartValue;
        this.correct = 0;
        this.incorrect = 0;
        this.loadQuestion();
    }

};

$(document).on("click", "#reset", function() {
    game.reset();
});

$(document).on("click", ".answer-button", function(e) {
    game.clicked(e);
});

$(document).on("click", "#start", function() {
    $("#container-timer").append("<h2> <span id='timer-slot'>20</span> Seconds</h2>");
    game.loadQuestion();

});