//Set game to start.
$(document).ready(function(){
  
});

//Set variables

var correct = 0;
var incorrect = 0;
var unanswered = 0;
var timer = 30;
var IntervalId;
var clockRunning = false;
var answer;
var choices;

var questions = [{
    question: "What is the name of the Father?",
    choices: ["Mark", "Jessie", "Joey", "Danny" ],
    answer: "Danny", 
},
{
    question: "What the name of the dog?",
    choices: ["Commet", "Pup", "Lucky", "Driver" ],
    answer: "Commet",
},
{
    question: "Who did Jessy Marry?",
    choices: ["Kimmy", "Sara", "Becky", "Whitney" ],
    answer: "Becky",
},
{    
    question: "What did Joey do for a profession?",
    choices: ["Musician", "Cook", "comic", "TV show host" ],
    answer: "comic"
}]
// Displays questions.
for(var i = 0; i < questions.length; i++) {
    $("#questions").append(questions[i].question + "<br>");

// Displays my Choices to pick from.
    var choice = questions[i].choices;
    for(var j = 0; j < choice.length; j++) {
        $(".choices").append(choice[j] + "<br>");
        }
}

//Timer function
function decrement() {
	timer--;
    $("#time-left").text("Time Left: " + timer);
    if (timer === 0){
        stop();
    }
};
setTimeout(thirtySeconds, 1000 * 20);

function thirtySeconds() {
	$("#time-left").html("Time Left" + timer);
	console.log(timer);
};
$("#start").on("click", gameStart)

function gameStart() {
	clearInterval(IntervalId);
	IntervalId = setInterval(decrement, 1000);
    timer = 3;	
    stop();
}
    
//Stop timer function
function stop() {
    if (timer <= 0) {
    clearInterval(IntervalId);
    clockRunning = false;
    }
}

  function reset() {
    timer = 30;
    $("#timer").text(timer);
  }
