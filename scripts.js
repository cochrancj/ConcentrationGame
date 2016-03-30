console.log("...loaded");

  var makeBoard;

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

   var marvel = [
     {src: 'images/A-logo.png', data: 01},
     {src: 'images/Cap.png', data: 02},
     {src: 'images/Daredevil.png', data: 03},
     {src: 'images/Deadpool.png', data: 04},
     {src: 'images/Hulk.png', data: 05},
     {src: 'images/Shield.png', data: 06},
     {src: 'images/Spiderman.png', data: 07},
     {src: 'images/Thor.png', data: 08},
     {src: 'images/Xmen.png', data: 09},
     {src: 'images/Y-logo.png', data: 10},
     {src: 'images/A-logo.png', data: 01},
     {src: 'images/Cap.png', data: 02},
     {src: 'images/Daredevil.png', data: 03},
     {src: 'images/Deadpool.png', data: 04},
     {src: 'images/Hulk.png', data: 05},
     {src: 'images/Shield.png', data: 06},
     {src: 'images/Spiderman.png', data: 07},
     {src: 'images/Thor.png', data: 08},
     {src: 'images/Xmen.png', data: 09},
     {src: 'images/Y-logo.png', data: 10}
    ]


//THIS MAKES A DIV FOR EACH CARD AND POPULATES WITH AN IMAGE FROM THE ARRAY.
makePieces =  function(array){ //should not append
    for (var i = 0; i < array.length; i++) {
      $('#game-pieces').append($('<div>').addClass('card ' + 'temp-faceup ').attr('data',array[i].data).css('background-image', 'url(' + array[i].src + ')'));
      // bindClick()
    };

//THIS APPENDS THE BOARD DIV TO THE DOM
function makeBoard(){ //RESPONSIBLE FOR APPENDING
 $('#game-board').append('#game-pieces');

};

// When the board is ready and the page loads, show all cards briefly on load so player can preview matches.

// Flip tiles back over to begin
    window.setTimeout(function() {
      $('.card').toggleClass('temp-faceup');
      $('.card').addClass('facedown');
      $('.card').css('background-image','url(images/card-facedown-2.jpg)');
    },2000);
  };

// FISHER YATES SHUFFLE METHOD - THIS SHUFFLES THE 'CARDS'
function shuffle(array) {
  for (i = array.length - 1; i > 0; i -= 1) {
    var j = Math.floor(Math.random() * (i + 1))
    var temp = array[i]
    array[i] = array[j]
    array[j] = temp
  }
  // console.log(array)
};

var arraySelection = owls;

function pickDeck() {
$('.pick-deck1').click(function() {
 var arraySelection = marvel;
 $("#game-board").empty();
 shuffle(arraySelection);
 makeBoard(arraySelection);
 // console.log($('#game-board'))
 ;
});

$('.pick-deck2').click(function() {
 var arraySelection = owls;
 $("#game-board").empty();
 shuffle(arraySelection);
 makeBoard(arraySelection);
 // console.log($('#game-board'))
 bindClick();
});


};





// THIS ADDS THE BLINK
function initBoard() {

  $('.card').delay(100).fadeOut('slow').fadeIn('slow').toggleClass('facedown');
};

initBoard();


// When the player clicks a tile, flip tile over with an animation and toggle the class to face up; do a second time with your second click.

function bindClick() {
  $('.facedown').click(function() {
    clickLogic();
  });

  $('.card').click(function() {
    $('#click-count').html(function(i, val) { return val*1+1 });
  });
};

function clickLogic(){
  console.log("YO");
  var $currentCard = $(this);
  var backgroundData = parseInt($(this).attr("data"));
  console.log(array[1].data);
  console.log( parseInt($(this).attr("data")))
  for (var i = 0; i < array.length; i++) {
    if( array[i].data === backgroundData){
       $currentCard.css('background-image','url(' + array[i].src + ')');
       console.log(array[i].src)
    }
  }
  $(this).toggleClass("facedown");
  $(this).toggleClass("temp-faceup");
  checkState();
}
  //
  // $currentCard.css('background-image','url(' + $currentCard.attr('src') + ')');



  // console.log('click!');

  // COMPARE CARDS ON CLICK OF CARD
  // If tiles match, keep perisistently up; if they do not match, flip both cards back over (face down class).
  //

function checkState() {
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
};







//NO CONSOLE ERRORS; DOES NOT SHOW UP
var countdown;
var countdownNumber;

	function countdown_init() {
		countdownNumber = 0;
		countdown_trigger();
	}

	function countdown_trigger() {
		if(countdownNumber > 0) {
			countdownNumber++;
			$('#timer').innerHTML = countdownNumber;
			if(countdownNumber > 0) {
				countdown = setTimeout('countdown_trigger()', 1000);
			}
		}
	}

//ALSO DOES NOT WORK BUT DOES NOT RETURN ANY KIND OF THING ON PAGE
//   var myVar = setInterval(myTimer ,1000);
// function myTimer() {
//     var d = new Date();
//     $("#timer").innerHTML = d.toLocaleTimeString();
// };



// Continue on until all cards are selected.

// make some sort of you win big deal

// NOT WORKING BUT NO ERRORS
function youWin() {
  if (($('.temp-faceup') === 0) && ($('.facedown') === 0)) {
    $('body').addClass('winner');
  }
};

function winnerCheat() {
  var $cheat = $('#cheat');
  var distance = 1200;

  setInterval(function() {
    $cheat.css('left', distance + 'px');
    if (distance < -300) {
      distance = 1200;
    } else {
      distance -= 5;
    }
  }, 60);
};


$(document).ready(function() {
  shuffle(arraySelection);
  makeBoard(arraySelection);

  // pickDeck();
  });


// If player takes too long in between choices, wiggle matches or make glow.

// If theres no activity for 5 seconds add wiggle - RE JIGGER TO ATTACH TO MATCHES INSTEAD OF THE BOARD ITSELF AND ONLY HAPPEN IF YOU HAVE ALREDY CLICKED ONE TIME

// var activityTimeout = setTimeout(inActive, 5000);
//
// function resetActive(){
//     $('#game-board').attr('class', 'active');
//     clearTimeout(activityTimeout);
//     activityTimeout = setTimeout(inActive, 5000);
// }

// No activity do something.
// function inActive(){
//     $('#game-board').attr('class', 'wiggle');
// }

// function inActive(){
//     var wiggle = function(gameboard) {
//   $('#game-board')
//     .animate({'left':(-10)+'px'},200)
//     .animate({'left':(+20)+'px'},200)
//     .animate({'left':(-10)+'px'},200);
//  };
// // this version of wiggle is not working
//      wiggle('#game-board');
// };
//
// // Check for mousemove, could add other events here such as checking for key presses ect.
// $(document).bind('mousemove', function(){resetActive()});



// If I get all this working, tie difficulty levels to the card sets - faster animations/less preview time and no wiggles for the medium level; and the rgb level is legendary.


// ++++++++++++++++++++++++++++
