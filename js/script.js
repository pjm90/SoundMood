// JS file var seconds;

document.getElementById('ready').onclick = function(){
  document.getElementById('loadingscreen').classList.add('hidden');
} ;
 
 // first selection round timer
$("#ok").click(function(){
  $('#timer').addClass('timer-quick');
  $('.timer-quick').startTimer();
    console.log('timer works');
});

// second selection round timer
$("#ok2").click(function(){
  $('#timer2').addClass('timer-quick');
  $('.timer-quick').startTimer();
    console.log('timer works');
});

document.getElementById('ok').onclick = function(){
  document.getElementById('instruction1').classList.add('hidden');
    // after 10 seconds error screen appears
  error = setTimeout(function(){
    document.getElementById("SlowEndScreen").classList.add("topLayer");
   }, 10000);
} ;

var result = "slow";

var firstRound = document.getElementsByClassName('gallery__img');
console.log(result);

// first round of selections - picture selection
for (var i = 0; i < firstRound.length; i++) {
  firstRound[i].onclick = function (event) {
    var value = event.target.getAttribute('data-value');
    console.log(value);
    result = value;
    console.log(result);
        // because the user clicked on one of the images the timeOut for error screen gets cleared
    clearTimeout(error);
    document.getElementById("gallery1").classList.add("hidden");
    // makes the gifScreen disappear after 10 seconds 
    setTimeout(function(){
     document.getElementById("gifScreen").classList.add("hidden");
      // animation
      //document.getElementById("instructionP2").classList.add("zoomIn");
      //document.getElementById("ok2").classList.add("zoomIn");
    }, 5000);
  }
};

document.getElementById('ok2').onclick = function(){
  document.getElementById('instruction2').classList.add('hidden');
      // after 10 seconds error screen appears
  error = setTimeout(function(){
    document.getElementById("SlowEndScreen").classList.add("topLayer");
   }, 10000);
} ;

new Vue({
  el: '#gallery2',
  methods: {
    showResult: function () {
    var value = event.target.getAttribute('data-value');
    console.log(value);
    // combination of both selections (concatinated)
    result = result + value;
    console.log(result);
    // result calculation
      if (result == "happyhappy" || result == "happyenergetic" || result == "energetichappy" || result == "energeticenergetic") {
        document.getElementById("HappyEndScreen").classList.add("topLayer");
        console.log(result);
      }   else if (result == "sadsad" || result == "sadbored" || result == "boredsad" || result == "boredbored") {
        document.getElementById("SadEndScreen").classList.add("topLayer");
        console.log(result);
        }   else {
        document.getElementById("SlowEndScreen").classList.add("topLayer");
        console.log(result);
          }
    }
  }
});

var error;

var firstRound = document.getElementsByClassName('gallery__img');
console.log(result);