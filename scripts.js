console.log("...loaded");

$(document).ready(function() {

// ------Concentration Game Pseudo Code------

// Build a game board containing 50 tiles.

var concentrationGame = {};

    // Build a 'pick your cards' function. **- V2 -**

// Build two arrays of 25 tiles each (2 identical arrays) to store the tiles that will be used to populate the board.

var owlArray1 = [
  <img src="/images/owls-01.png">,
  <img src="/images/owls-02.png">,
  <img src="/images/owls-03.png">,
  <img src="/images/owls-04.png">,
  <img src="/images/owls-05.png">,
  <img src="/images/owls-06.png">,
  <img src="/images/owls-07.png">,
  <img src="/images/owls-08.png">,
  <img src="/images/owls-09.png">,
  <img src="/images/owls-10.png">,
  <img src="/images/owls-11.png">,
  <img src="/images/owls-12.png">,
  <img src="/images/owls-13.png">,
  <img src="/images/owls-14.png">,
  <img src="/images/owls-15.png">,
  <img src="/images/owls-16.png">,
  <img src="/images/owls-17.png">,
  <img src="/images/owls-18.png">,
  <img src="/images/owls-19.png">,
  <img src="/images/owls-20.png">,
  <img src="/images/owls-21.png">,
  <img src="/images/owls-22.png">,
  <img src="/images/owls-23.png">,
  <img src="/images/owls-24.png">,
  <img src="/images/owls-25.png">
]

    //(create versions of this for the three card type options I want to build - marvel heroes + villains, owls & slightly different RGB values - if these images don't work, use 8-bit food icons + rgb values + geometrical shapes or Pokemon or tarot cards) **- V2 -**

// Use Math.floor & Math.random to randomize tiles in each array.

concentrationGame.init = function() {
  XX = Math.floor(Math.random() * owlArray1.length);
}
//
// Populate board with the randomly selected tiles (class: face down) using a for loop to iterate over the arrays and pop them into a new array containing all 50 cards (each card has a match).

for (var i = 0; i < owlArray1.length; i++) {
  // owlArray1[i]
  $(GAME BOARD).append(XXXXXXXXX);
  XXXXX.push(XXXX);
}

//
// This sets up the board.
//
// When the board is ready and the page loads, show all cards briefly on load (toggle class face up with a timeout of less than a second) so player can preview matches.
//
// Flip tiles back over to begin - use a nifty animation.
//
// When the player clicks a tile, flip tile over with an animation and toggle the class to face up; do a second time with your second click.

concentrationGame.makeGuess1 = function(XXX) {
  if XXX ==
}

$('.card facedown').click(function() {
  $(this).toggleClass('XXXXXX');
}
setTimeout 1000);


//
// If tiles match, remove from board (add display: none class); if they do not match, flip both cards back over (face down class).
//
// Continue on until all cards are selected.
//
// If player takes too long in between choices, wiggle matches or make glow.
//
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




});
