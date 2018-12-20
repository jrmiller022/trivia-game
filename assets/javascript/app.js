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
	question: "What the name of the dog?",
	choices: ["Commet", "Pup", "Lucky", "Driver"],
	answer: "Commet",
}, {
	question: "Who did Jessy marry?",
	choices: ["Kimmy", "Sara", "Becky", "Whitney"],
	answer: "Becky",
}, {
	question: "What did Joey do for a profession?",
	choices: ["Musician", "Cook", "Comic", "TV show host"],
	answer: "Comic"
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

$(".choices").on("click", "button", function() {
	userPick = $(".choices").append(choices);
	questions[i].val;
	if (userPick !== choices[j].val) {
		incorrect++;
	} else(userPick === choices[j].val);
		correct++;
})

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


// //function for capturing the answer from the data-attribute
// function correctAnswer() {
//   $(correctAnswer).append(correct);
//   console.log(correct);
// }

// // Function for displaying answer data
// function renderButtons() {

//   // (this is necessary otherwise we will have repeat buttons)
//   $("buttons").empty();

//   // Looping through the array of movies
//   for (var i = 0; i < question.length; i++) {

// 	// This code $("<button>") is all jQuery needs to create the beginning and end tag. (<button></button>)
// 	var a = $("<button>");
// 	// Adding a class
// 	a.addClass("answer");
// 	// Added a data-attribute
// 	a.attr("data-name", questions[i]);
// 	// Provided the initial button text
// 	a.text(choice[i]);
//   }
// }

// // This function handles events where one button is clicked
// $("button").on("click", function(event) {
//   event.preventDefault();

//   // This line grabs the input from the textbox
//   var pick = $("button").val().trim();

//   // The answer from the textbox is then added to our array
//   choice.push(choices);

//   // Calling renderButtons which handles the processing of our choices array
//   renderButtons();
// });

// // Function for displaying the answer info
// // adding a click event listener to all elements with the class "choices"
// // adding the event listener to the document itself.
// // $(".movies").on("click") will only add listeners to elements that are on the page at that time
// $(document).on("click", ".choice", correctAnswer);

// // Calling the renderButtons function to display the intial buttons
// renderButtons();