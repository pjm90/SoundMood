// JS file var seconds;

document.getElementById('ready').onclick = function(){
  document.getElementById('loadingscreen').classList.add('hidden');
} ;

document.getElementById('ready2').onclick = function(){
  document.getElementById('instruction1').classList.add('hidden');
   var seconds;
  var temp;
 
  function countdown() {
    seconds = document.getElementById('countdown').innerHTML;
    seconds = parseInt(seconds, 10);
 
    if (seconds == 1) {
      temp = document.getElementById('countdown');
      temp.innerHTML = "Done";
      return;
    };
 
    seconds--;
    temp = document.getElementById('countdown');
    temp.innerHTML = seconds;
    timeoutMyOswego = setTimeout(countdown, 1000);
  } ;
 
  countdown();

    // after 10 seconds error screen appears
  error = setTimeout(function(){
    document.getElementById("SlowEndScreen").classList.add("topLayer");
   }, 10000);
} ;

  // after 10 seconds error screen appears
  error = setTimeout(function(){
    document.getElementById("endScreen").classList.add("topLayer");
   }, 10000);


// default result if nothing is selected by user
var result = "slow";

var error;

var firstRound = document.getElementsByClassName('gallery__img');
console.log(result);