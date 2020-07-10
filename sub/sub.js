/***** ELEMENTS *****/
var startButton = document.getElementById("start");
var stopButton = document.getElementById("stop");
var inputField = document.getElementById("in");
var form = document.querySelector("form");
var p = document.getElementById("p");
var q = document.getElementById("q");
var op = document.getElementById("op");
var response = document.getElementById("response"); // used for Try Again text
var results = document.getElementById("results");
var category = document.getElementById("category");
var time = document.getElementById("time");
const totscore = document.getElementById("totscore");
/***** STATE VARIABLES *****/
const max = 15;
var num1;
var num2;
var answer;

var startTime;
var endTime;

var times = [];
var score = 0;










/***** INITIALIZING *****/
inputField.className = "hide";
stopButton.className = "hide";

/***** EVENTS *****/
startButton.onclick = function() {
	// initializing the count
	var count = 59; // number of correct answers

	times = [];
	results.innerHTML = ""; // clear results
	category.innerHTML = ""; // clear category
	refreshNums();
	inputField.className = ""; // show the input field
	startButton.className = "hide"; // hide the start button
	inputField.focus();
	
	var interval = window.setInterval(
		function () {
			count--;
			time.innerHTML = "You have " + count + " more seconds";
			if (count == 0) {
				afterStopButton()
				clearInterval(interval);
			}
		}, 1000);		
		interval
	count = 61;

};

form.onsubmit = function(e) {
	// need to prevent the default form submission wich reloads the page
	e.preventDefault();
	getAnswer();
	totscore.innerHTML = "Your Score is: " + score;
};

stopButton.onclick = afterStopButton();

function afterStopButton() {


	inputField.className = "hide"; // hide the input field
	stopButton.className = "hide"; // hide the stop button
	startButton.className = ""; // show the start button

	// clear numbers and present results
	p.innerHTML = "";
	q.innerHTML = "";
	op.innerHTML = "";
	response.innerHTML = ""; // clear response in case it was set

	if (score  == 0) {
		results.innerHTML = "Press Start!";
	} else if (score <=  3) {
		results.innerHTML = "It would help if you opened your eyes";
	} 
		else if (score <=  10) {
		results.innerHTML = "B Student";
	} else if (score <= 30) {
		results.innerHTML =  "Honors Roll";
	} else {
		results.innerHTML =  "You know what, take my crown";
	} 


};

/***** FUNCTIONS ******/
var refreshNums = function() {
	// Getting some random numbers
	num1 = Math.floor((Math.random() * 20) + 10);
	num2 = Math.floor((Math.random() * 9) );
	// Printing numbers to user
	p.innerHTML = num1;
	op.innerHTML = "-";
	q.innerHTML = num2;
	// Starting timer
	startTime = new Date();
};

/*
* This is called in the onsubmit event
*/
var getAnswer = function() {
	var correct = num1 - num2;
	// Getting the users attempt
	answer = parseInt(inputField.value);

	if (answer === correct) {
		score++;
		response.innerHTML = "";
		refreshNums();
	} else {
		response.innerHTML = "Try Again";
	}
	// clear the input field for the next round
	inputField.value = "";
};





function myFunction() {
	var x = document.getElementById("myTopnav");
	if (x.className === "topnav") {
	  x.className += " responsive";
	} else {
	  x.className = "topnav";
	}
  }