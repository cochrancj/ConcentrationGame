console.log("...loaded");

$(document).ready(function() {

// Build a game board containing 50 tiles.

  var concentrationGame = {};

// Build a 'pick your cards' function. **- V2 -**

// Build two arrays of 25 tiles each (2 identical arrays) to store the tiles that will be used to populate the board.

      //
      // (create versions of this for the three card type options I want to build - marvel heroes + villains, owls & slightly different RGB values - if these images don't work, use 8-bit food icons + rgb values + geometrical shapes or Pokemon or tarot cards) **- V2 -**

//make the board
function makeBoard() {

var owls1 = [
//array of images for first click
"<div class='faceup'><img src='images/owls-01.png'></div>",
"<div class='faceup'><img src='images/owls-02.png'></div>",
"<div class='faceup'><img src='images/owls-03.png'></div>",
"<div class='faceup'><img src='images/owls-04.png'></div>",
"<div class='faceup'><img src='images/owls-05.png'></div>",
"<div class='faceup'><img src='images/owls-06.png'></div>",
"<div class='faceup'><img src='images/owls-07.png'></div>",
"<div class='faceup'><img src='images/owls-08.png'></div>",
"<div class='faceup'><img src='images/owls-09.png'></div>",
"<div class='faceup'><img src='images/owls-10.png'></div>",
"<div class='faceup'><img src='images/owls-11.png'></div>",
"<div class='faceup'><img src='images/owls-12.png'></div>",
"<div class='faceup'><img src='images/owls-13.png'></div>",
"<div class='faceup'><img src='images/owls-14.png'></div>",
"<div class='faceup'><img src='images/owls-15.png'></div>",
"<div class='faceup'><img src='images/owls-16.png'></div>",
"<div class='faceup'><img src='images/owls-17.png'></div>",
"<div class='faceup'><img src='images/owls-18.png'></div>",
"<div class='faceup'><img src='images/owls-19.png'></div>",
"<div class='faceup'><img src='images/owls-20.png'></div>",
"<div class='faceup'><img src='images/owls-21.png'></div>",
"<div class='faceup'><img src='images/owls-22.png'></div>",
"<div class='faceup'><img src='images/owls-23.png'></div>",
"<div class='faceup'><img src='images/owls-24.png'></div>",
"<div class='faceup'><img src='images/owls-25.png'></div>"
];

var owls2 = [
//duplicate array of images for second click
"<div class='faceup'><img src='images/owls-01.png'></div>",
"<div class='faceup'><img src='images/owls-02.png'></div>",
"<div class='faceup'><img src='images/owls-03.png'></div>",
"<div class='faceup'><img src='images/owls-04.png'></div>",
"<div class='faceup'><img src='images/owls-05.png'></div>",
"<div class='faceup'><img src='images/owls-06.png'></div>",
"<div class='faceup'><img src='images/owls-07.png'></div>",
"<div class='faceup'><img src='images/owls-08.png'></div>",
"<div class='faceup'><img src='images/owls-09.png'></div>",
"<div class='faceup'><img src='images/owls-10.png'></div>",
"<div class='faceup'><img src='images/owls-11.png'></div>",
"<div class='faceup'><img src='images/owls-12.png'></div>",
"<div class='faceup'><img src='images/owls-13.png'></div>",
"<div class='faceup'><img src='images/owls-14.png'></div>",
"<div class='faceup'><img src='images/owls-15.png'></div>",
"<div class='faceup'><img src='images/owls-16.png'></div>",
"<div class='faceup'><img src='images/owls-17.png'></div>",
"<div class='faceup'><img src='images/owls-18.png'></div>",
"<div class='faceup'><img src='images/owls-19.png'></div>",
"<div class='faceup'><img src='images/owls-20.png'></div>",
"<div class='faceup'><img src='images/owls-21.png'></div>",
"<div class='faceup'><img src='images/owls-22.png'></div>",
"<div class='faceup'><img src='images/owls-23.png'></div>",
"<div class='faceup'><img src='images/owls-24.png'></div>",
"<div class='faceup'><img src='images/owls-25.png'></div>"
];

// randomizes array 1 + array 2
var owlsRandom1 = Math.floor(Math.random() * owls1.length);
var owlsRandom2 = Math.floor(Math.random() * owls2.length);

//sets the game board up with the images + randomization -- THIS IS NOT WORKING
var gameBoard = owls1[owlsRandom1] + owls2[owlsRandom2];

// THIS IS NOT WORKING
$('#game-board').append(gameBoard);
};

// WOULD THIS BE A BETTER WAY TO APPROACH THIS ISSUE?????

// Populate board with the randomly selected tiles (class: face down) using a for loop to iterate over the arrays and pop them into a new array containing all 50 cards (each card has a match).
//
// for (var i = 0; i < owlArray1.length; i++) {
//   // owlArray1[i]
//   $('#game-board').push(XXXXWHERE WOULD THIS PUSH TO?????XXXXX);
// }

// When the board is ready and the page loads, show all cards briefly on load (toggle class face up with a timeout of less than a second) so player can preview matches.
//
// Flip tiles back over to begin - use a nifty animation.

//flashes front side of cards on load for a few seconds. THIS IS NOT WORKING
function initBoard() {

$('#game-board').bind('click', function (e) {
  $('.card').each(function (index) {
    $(this).toggleClass('facedown')
          .delay(index * 200)
          .fadeOut(1500);
  });
  e.preventDefault();
});

};

// When the player clicks a tile, flip tile over with an animation and toggle the class to face up; do a second time with your second click.

// sets up click handler on cards
$('.card').on('click', function() {
  var $currentCard = $(this);
  $currentCard.toggleClass("facedown");
} setTimeout(1000));

// COMPARE CARDS ON CLICK OF CARD
// If tiles match, remove from board (add display: none class); if they do not match, flip both cards back over (face down class).

concentrationGame.makeGuess1 = function(XX) {
  if (owls1 === owls2) {
    $(XXXXXNEED SOMETHING FOR MATCHESXXX).css("opacity," "0%");
  } else {
    $(XXXXXNEED SOMETHING FOR MATCHESXXX).toggleClass('facedown');
  }
}
// IS THIS WHAT I NEED TO BE COMPARING???? WHERE DO THESE MATCHES "LIVE"????

// Continue on until all cards are selected.

// make some sort of you win big deal

// If player takes too long in between choices, wiggle matches or make glow.


$('.flip').click(function(){
    $(this).find('.card').addClass('flipped').mouseleave(function(){
        $(this).removeClass('flipped');
    });
    return false;
});





// Add click counter and timer

// If I get all this working, tie difficulty levels to the card sets - faster animations/less preview time and no wiggles for the medium level; and the rgb level is legendary.

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
