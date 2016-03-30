console.log("...loaded");

var makeBoard;

$(document).ready(function() {

  var owls = [
    {src: 'images/owls-01.png', data: 01},
    {src: 'images/owls-02.png', data: 02},
    {src: 'images/owls-03.png', data: 03},
    {src: 'images/owls-04.png', data: 04},
    {src: 'images/owls-05.png', data: 05},
    {src: 'images/owls-06.png', data: 06},
    {src: 'images/owls-07.png', data: 07},
    {src: 'images/owls-08.png', data: 08},
    {src: 'images/owls-09.png', data: 09},
    {src: 'images/owls-010.png', data: 10},
    {src: 'images/owls-01.png', data: 01},
    {src: 'images/owls-02.png', data: 02},
    {src: 'images/owls-03.png', data: 03},
    {src: 'images/owls-04.png', data: 04},
    {src: 'images/owls-05.png', data: 05},
    {src: 'images/owls-06.png', data: 06},
    {src: 'images/owls-07.png', data: 07},
    {src: 'images/owls-08.png', data: 08},
    {src: 'images/owls-09.png', data: 09},
    {src: 'images/owls-010.png', data: 10}
   ]

//THIS MAKES A DIV FOR EACH CARD AND POPULATES WITH AN IMAGE FROM THE ARRAY. IT ALSO SETS A TIMEOUT ON THE LOAD FLASH AND SETS ALL IMAGES TO FACEDOWN TO CONTINUE
makeBoard =  function(){
    for (var i = 0; i < owls.length; i++) {
      $('#game-board').append($('<div>').addClass('card ' + 'temp-faceup ').attr('data',owls[i].data).css('background-image', 'url(' + owls[i].src + ')'));
    };

// When the board is ready and the page loads, show all cards briefly on load (toggle class face up with a timeout of less than a second) so player can preview matches.
// Flip tiles back over to begin - use a nifty animation.
    window.setTimeout(function() {
      $('.card').toggleClass('temp-faceup');
      $('.card').addClass('facedown');
      $('.card').css('background-image','url(images/card-facedown-2.jpg)');
    },2000);
  };

// FISHER YATES SHUFFLE METHOD - THIS SHUFFLES THE 'CARDS'
function shuffle () {
  for (i = owls.length - 1; i > 0; i -= 1) {
    var j = Math.floor(Math.random() * (i + 1))
    var temp = owls[i]
    owls[i] = owls[j]
    owls[j] = temp
  }
  console.log(owls)
};

shuffle();
makeBoard();


// THIS ADDS THE BLINK
function initBoard() {

  $('.card').delay(100).fadeOut('slow').fadeIn('slow').toggleClass('facedown');
};

initBoard();


// When the player clicks a tile, flip tile over with an animation and toggle the class to face up; do a second time with your second click.


$('.facedown').click(function() {
  var $currentCard = $(this);
  $currentCard.toggleClass("facedown");
  $currentCard.toggleClass("temp-faceup");
  $currentCard.css('background-image','url( images/owls-0'+$currentCard.attr('data')+'.png)');


  // console.log('click!');

  // COMPARE CARDS ON CLICK OF CARD
  // If tiles match, keep perisistently up; if they do not match, flip both cards back over (face down class).
  //


  var $flippedCards = $('.temp-faceup');

  if ($flippedCards.length === 2) {
    // console.log("match");
    var owlData1 = $flippedCards.eq(0).attr('data');
    var owlData2 = $flippedCards.eq(1).attr('data');

    if (owlData1 === owlData2) {
      $flippedCards.addClass('faceup').removeClass('temp-faceup').off();
    } else {
      setTimeout(function () {
      $flippedCards.addClass('facedown').removeClass('temp-faceup').css('background-image','url(images/card-facedown-2.jpg)');
    }, 700);//THIS IS NOT WORKING
    }
  }


// function(event) {
//   event.stopImmediatePropagation();
// }



});



$('.card').click(function() {

    $('#click-count').html(function(i, val) { return val*1+1 });
});

});

//NO CONSOLE ERRORS; DOES NOT SHOW UP
// var countdown;
// var countdownNumber;
//
// 	function countdown_init() {
// 		countdownNumber = 0;
// 		countdown_trigger();
// 	}
//
// 	function countdown_trigger() {
// 		if(countdownNumber > 0) {
// 			countdownNumber++;
// 			$('#timer').innerHTML = countdownNumber;
// 			if(countdownNumber > 0) {
// 				countdown = setTimeout('countdown_trigger()', 1000);
// 			}
// 		}
// 	}

//ALSO DOES NOT WORK BUT DOES NOT RETURN ANY KIND OF THING ON PAGE
  var myVar = setInterval(myTimer ,1000);
function myTimer() {
    var d = new Date();
    $("#timer").innerHTML = d.toLocaleTimeString();
};



// Continue on until all cards are selected.

// make some sort of you win big deal



// If player takes too long in between choices, wiggle matches or make glow.

// If theres no activity for 5 seconds add wiggle - RE JIGGER TO ATTACH TO MATCHES INSTEAD OF THE BOARD ITSELF AND ONLY HAPPEN IF YOU HAVE ALREDY CLICKED ONE TIME

var activityTimeout = setTimeout(inActive, 5000);

function resetActive(){
    $('#game-board').attr('class', 'active');
    clearTimeout(activityTimeout);
    activityTimeout = setTimeout(inActive, 5000);
}

// No activity do something.
// function inActive(){
//     $('#game-board').attr('class', 'wiggle');
// }

function inActive(){
    var wiggle = function(gameboard) {
  $('#game-board')
    .animate({'left':(-10)+'px'},200)
    .animate({'left':(+20)+'px'},200)
    .animate({'left':(-10)+'px'},200);
 };
// this version of wiggle is not working
     wiggle('#game-board');
};

// Check for mousemove, could add other events here such as checking for key presses ect.
$(document).bind('mousemove', function(){resetActive()});



// If I get all this working, tie difficulty levels to the card sets - faster animations/less preview time and no wiggles for the medium level; and the rgb level is legendary.


// Build a 'pick your cards' function. **- V2 -**

      // (create versions of this for the three card type options I want to build - marvel heroes + villains, owls & slightly different RGB values - if these images don't work, use 8-bit food icons + rgb values + geometrical shapes or Pokemon or tarot cards) **- V2 -**

  // $('.pick-deck1').click(function() {
  //   $(this).toggleClass('pick-marvel');
  // });
  //
  // $('.pick-deck2').click(function() {
  //   $(this).toggleClass('pick-owls');
  // });
  //
  // $('.pick-deck3').click(function() {
  //   $(this).toggleClass('pick-rgb');
  // });
// ++++++++++++++++++++++++++++
