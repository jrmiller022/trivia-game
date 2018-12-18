//Set game to start.
$(document).ready(function(){
  
});

//Set variables

var correct = 0;
var incorrect = 0;
var unanswered = 0;
var timer = 30;
var IntervalId;

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

// Start timer
function decrement () {
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

$("#start").on("click" , gameStart)

function gameStart () {
    clearInterval(IntervalId);
    IntervalId = setInterval(decrement, 1000);
    timer = 30;
//for loop for questions
for (var i = 0; i < guestion.length; i++){

}
}
    
//Stop score function