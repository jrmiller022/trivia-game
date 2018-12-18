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

var question = [{
        
    question: "What is the name of the Father?",
    choices: ["Mark", "Jessie", "Joey", "Danny" ],
    answer: "chioce4    ", 
},
{
    question: "What the name of the dog?",
    choices: ["Commet", "Pup", "Lucky", "Driver" ],
    answer: "choice1",
},
{
    question: "Who did Jessy Marry?",
    choices: ["Kimmy", "Sara", "Becky", "Whitney" ],
    answer: "choice3",
},
{    
    question: "What did Joey do for a profession?",
    choices: ["Musician", "Cook", "comic", "TV show host" ],
    answer: "choice3"
}]
console.log(question);

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
};
$("#start").on("click", gameStart)

function gameStart() {
	clearInterval(IntervalId);
	IntervalId = setInterval(decrement, 1000);
    timer = 30;	
}
    
//Stop timer function
function stop() {
    clearInterval(timer);
    clockRunning = false;
		stop();
}

  function reset() {
    time = 0;
    $("#timer").text(0);
  }

//for loop for questions.
function questions() {
$("#question").text(question);


}



// // STOPWATCH ACTIVITY (SOLUTION)
// // =============================

// // This code will run as soon as the page loads
// window.onload = function() {
//     $("#lap").on("click", recordLap);
//     $("#stop").on("click", stop);
//     $("#reset").on("click", reset);
//     $("#start").on("click", start);
//   };
  
//   //  Variable that will hold our setInterval that runs the stopwatch
//   var intervalId;
  
//   // prevents the clock from being sped up unnecessarily
//   var clockRunning = false;
//   var time = 0;
//   var lap = 1;
  
//   function reset() {
  
//     time = 0;
//     lap = 1;
  
//     // DONE: Change the "display" div to "00:00."
//     $("#display").text("00:00");
  
//     // DONE: Empty the "laps" div.
//     $("#laps").text("");
//   }
//   function start() {
  
//     // DONE: Use setInterval to start the count here and set the clock to running.
//     if (!clockRunning) {
//       intervalId = setInterval(count, 1000);
//       clockRunning = true;
//     }
//   }
//   function stop() {
  
//     // DONE: Use clearInterval to stop the count here and set the clock to not be running.
    // clearInterval(intervalId);
    // clockRunning = false;
//   }