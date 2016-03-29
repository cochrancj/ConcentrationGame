console.log("...loaded");

var makeBoard;

$(document).ready(function() {

  var owls = [
    'images/owls-01.png',
    'images/owls-02.png',
    'images/owls-03.png',
    'images/owls-04.png',
    'images/owls-05.png',
    'images/owls-06.png',
    'images/owls-07.png',
    'images/owls-08.png',
    'images/owls-09.png',
    'images/owls-10.png',
    'images/owls-11.png',
    'images/owls-12.png',
    'images/owls-13.png',
    'images/owls-14.png',
    'images/owls-15.png',
    'images/owls-16.png',
    'images/owls-17.png',
    'images/owls-18.png',
    'images/owls-19.png',
    'images/owls-20.png',
    'images/owls-21.png',
    'images/owls-22.png',
    'images/owls-23.png',
    'images/owls-24.png',
    'images/owls-25.png',
    'images/owls-01.png',
    'images/owls-02.png',
    'images/owls-03.png',
    'images/owls-04.png',
    'images/owls-05.png',
    'images/owls-06.png',
    'images/owls-07.png',
    'images/owls-08.png',
    'images/owls-09.png',
    'images/owls-10.png',
    'images/owls-11.png',
    'images/owls-12.png',
    'images/owls-13.png',
    'images/owls-14.png',
    'images/owls-15.png',
    'images/owls-16.png',
    'images/owls-17.png',
    'images/owls-18.png',
    'images/owls-19.png',
    'images/owls-20.png',
    'images/owls-21.png',
    'images/owls-22.png',
    'images/owls-23.png',
    'images/owls-24.png',
    'images/owls-25.png'
   ]

// ADD DATA ATTRIBUTES TO EACH IMAGE SO THOSE ATTRIBUTES CAN BE COMPARED LATER ON

makeBoard =  function(){
    for (var i = 0; i < owls.length; i++) {
      $('#game-board').append($('<div>'). addClass('card ' + 'faceup ' + i).css('background-image', 'url(' + owls[i] + ')'));
    };
  };


// FISHER YATES SHUFFLE METHOD - WORKS
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



// When the board is ready and the page loads, show all cards briefly on load (toggle class face up with a timeout of less than a second) so player can preview matches.
//
// Flip tiles back over to begin - use a nifty animation.

//flashes front side of cards on load for a few seconds. THIS IS NOT WORKING
function initBoard() {

$('#start').bind('click', function (e) {
  $('.card').each(function (index) {
    $(this).toggleClass('facedown')
          .delay(index * 200)
          .fadeOut(1500);
  });
  e.preventDefault();
});
};

// initBoard();


// $('#start').click(function (e) {
//   $('.card').each(function (index) {
//     $(this).toggleClass('facedown')
//           .delay(index * 200)
//           .fadeOut(1500);
//   });
//   e.preventDefault();
// });



// When the player clicks a tile, flip tile over with an animation and toggle the class to face up; do a second time with your second click.

// sets up click handler on cards
// $('.card').on('click', function() {
//   var $currentCard = $(this);
//   $currentCard.toggleClass("facedown");
// });

// function flipCards() {

$('.card').click(function() {
  var $currentCard = $(this);
  $currentCard.toggleClass("facedown");
});

// });

// COMPARE CARDS ON CLICK OF CARD
// If tiles match, remove from board (add display: none class); if they do not match, flip both cards back over (face down class).

function makeGuess1() {
  if  ($('.card').data === $('.card').data) {
    $('.card').css('display', 'none');
  } else {
    $('.card').addClass('faceup');
  }
}

});

// Continue on until all cards are selected.

// make some sort of you win big deal



// If player takes too long in between choices, wiggle matches or make glow.

// if no clicks for 5 seconds, then add class "wiggle"
//
// function noGuesses() {
//   if (no activity for 5 seconds) {
//     (MATCHES).addClass('wiggle');
//   }
// };

// Add click counter and timer

// concentrationGame.clickCounter = function() {
//   ('#game-board').click().text();
// };

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
