//Set game to start.
$(document).ready(function() {});


//Set variables
var userPick;
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
	choices: ["Mark", "Jessie", "Joey", "Danny"],
	answer: "Danny",
}, {
	question: "What is the name of the dog?",
	choices: ["Commet", "Pup", "Lucky", "Driver"],
	answer: "Commet",
}, {
	question: "Who did Jessie marry?",
	choices: ["Kimmy", "Sara", "Becky", "Whitney"],
	answer: "Becky",
}, {
	question: "What did Joey do for a profession?",
	choices: ["Musician", "Cook", "Comic", "TV show host"],
	answer: "Comic",
}, {
	question: "What is the name of the neighbor girl that always comes over?",
	choices: ["DJ", "Stephanie", "Erica", "Kimmy"],
	answer: "Kimmy",
}]

// Displays questions.
question = $("<div>");
$("#quiz").append(question);
for (var i = 0; i < questions.length; i++) {
	$(question).append("<p>" + questions[i].question + "</p>");

// Displays my Choices to pick from.
	var choice = questions[i].choices;
	for (var j = 0; j < choice.length; j++) {
		var button = $("<button>");
		button.attr("class", "answerButton");
		$(question).append(button);
		$(button).append(choice[j]);
	}
}

$(".answerButton").on("click", function() {
	userPick = $(this).val().trim();
	questions[i].val();
	if (userPick !== choices[j].val()) {
		incorrect++;
	} else(userPick === choices[j].val());
		correct++;
})

$(document).on("click", ".SELECTOR", function() {})


//Timer function
function decrement() {
	timer--;
	$("#time-left").text("Time Left: " + timer);
	if (timer === 0) {
		stop();
	}
};
setTimeout(thirtySeconds, 1000 * 20);

function thirtySeconds() {
	$("#time-left").html("Time Left" + timer);
	console.log(timer);
}

$("#start").on("click", gameStart)

function gameStart() {
	clearInterval(IntervalId);
	IntervalId = setInterval(decrement, 1000);
	timer = 20;
    stop();
}

//Stop timer function
function stop() {
	if (timer <= 0) {
		clearInterval(IntervalId);
		alert("Times up!")
		clockRunning = false;
	}
}

function reset() {
	timer = 20;
	$("#timer").text(timer);
}

// Reset game.
function reset(){
    $("#start").on("click", gameStart);
}