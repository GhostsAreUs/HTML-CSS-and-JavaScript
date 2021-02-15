// VARIABLES ->
var seconds = 00;
var minutes = 00;

//this links to the html code
var appendSeconds = document.getElementById("seconds");
var appendMinutes = document.getElementById("minutes");
var buttonStart = document.getElementById("button-start");
var buttonStop = document.getElementById("button-stop");
var buttonReset = document.getElementById("button-reset");
var Interval ;

// <- VARIABLES

// BUTTONS ->

buttonStart.onclick = function()
{
  clearInterval(Interval);
  Interval = setInterval(startTimer, 10);
};
// ReferenceError: startTimer is not defined

buttonStop.onclick = function()
{
  clearInterval(Interval);
};

buttonReset.onclick = function()
{
  clearInterval(Interval);
  seconds = "00";
  minutes = "00";
  appendSeconds.innerHTML = seconds;
  appendMinutes.innerHTML = minutes;
};
// <- BUTTONS

// FUNCTIONS? ->
function startTimer (); {
  minutes++;
  if(minutes < 9)
  {appendMinutes.innerHTML = "0" + minutes; }
  if(minutes > 9)
  {appendMinutes.innerHTML = minutes; }
}

// <- FUNCTIONS