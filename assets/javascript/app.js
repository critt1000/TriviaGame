// var imageQuestions = [
//     {image: "amy", src: "../images/amy.jpeg"},
//     {question: "", answer1: "", answer2: "", answer3: "", answer4: ""},
//     {image:}

// ]

var image = [src = "assets/images/amy.jpg", src = "assets/images/bender.jpg", src = "assets/images/brian.jpg", src = "assets/images/cartman.jpg", src = "assets/images/chris.jpg",
src = "assets/images/goku.jpg", src = "assets/images/kenny.jpg", src = "assets/images/kyle.jpg", src = "assets/images/leela.jpg", src = "assets/images/lois.jpg",
src = "assets/images/meg.jpg", src = "assets/images/morty.jpg", src = "assets/images/peter.jpg", src = "assets/images/phillip.jpg", src = "assets/images/piccolo.jpg",
src = "assets/images/professor.jpg", src = "assets/images/rick.jpg", src = "assets/images/stan.jpg", src = "assets/images/stewie.jpg", src = "assets/images/vegeta.jpg",
src = "assets/images/zoidburg.jpg"]

var answer1 = ["jessica", "bender", "george", "kyle", "chris", "gohan", "derek", "steven", "leela", "shelli", "tiffani", "stanley", "peter", "trent", "dillan", "professor", "trey", "stan",
"jay", "vegeta", "hubert"];
var answer2 = ["mary", "fender", "bob", "cartman", "jacob", "goku", "andrew", "kyle", "layla", "pat", "meg", "rick", "toby", "drew", "piccolo", "engineer", "butch", "dan",
"lance", "frieza", "hermes"];
var answer3 = ["amy", "grinder", "beef", "doug", "gatlin", "trunks", "kenny", "andy", "loola", "lois", "meghan", "morty", "justin","donavan", "ty", "programmer", "rick", "doug",
"stewie", "krillin", "fry"];
var answer4 = ["alexa","folder", "brian", "archer", "ryan", "goten", "rogers", "sam", "heather", "terri", "christa", "ralph", "chad", "phillip", "brock", "doctor", "rocky", "lawerence",
"matt", "chi-chi", "zoidberg"];

var questionCounter = 0;
var userAnswers = [];
var correct = 0;
var wrong = 0;


function nextQuestion() {
    if (questionCounter < 21) {
        document.getElementById("image").src = image[questionCounter];
        // Add new values and text to input type="radio" & also collect users answers
        $("#a1").after(answer1[questionCounter]);
        $("#a2").after(answer2[questionCounter]);
        $("#a3").after(answer3[questionCounter]);
        $("#a4").after(answer4[questionCounter]);
        questionCounter++;
    } else {
        // call win function
    }
}

function win(){

}


