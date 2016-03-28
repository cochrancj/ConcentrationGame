console.log("...loaded");

$(document).ready(function() {

// Build a game board containing 50 tiles.

  var concentrationGame = {};
//NEED TO ADD DATA ATTRIBUTES TO EACH IMAGE - vv THIS IS NOT RIGHT
  // 'images/owls-01.png'.attr('data-info', '222')

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
    'images/owls-25.png'
   ]

// ADD DATA ATTRIBUTES TO EACH IMAGE SO THOSE ATTRIBUTES CAN BE COMPARED LATER ON

// THIS IS MAKING TWO DIVS OF EACH IMAGE, BUT THEY ARE NOT SHOWING UP ON THE PAGE. THEY SHOW UP AS THINGS THAT SHOULD BE VISIBILE IF YOU PLUG THIS INTO CONSOLE, BUT NOT ON THE PAGE ITSELF

  function makeBoard(){
    // make load on click of start button
    for (var i = 0; i < owls.length; i++) {
      $('#game-board').append($('<div>'). addClass('card- ' + 'col- ' + [i]).css('background-image', 'url(' + owls[i] + ')'));
      $('#game-board').append($('<div>'). addClass('card- ' + 'col- ' + [i]).css('background-image', 'url(' + owls[i] + ')'));
    };

// TRYING TO SHOOT 5 CARDS PER ROW. THIS DISPLAYS NO ERRORS, BUT DOES NOT WORK

    if (i <= 5) {
      $('<div>').addClass('row-1');
    } else if (i <= 10) {
      $('<div>').addClass('row-2');
    } else if (i <= 15) {
      $('<div>').addClass('row-3');
    } else if (i <= 20) {
      $('<div>').addClass('row-4');
    } else $('<div>').addClass('row-5');

  };


  function randomize() {
    var owlsRandom1 = Math.floor(Math.random() * owls.length);

  }

// Build a 'pick your cards' function. **- V2 -**

// Build two arrays of 25 tiles each (2 identical arrays) to store the tiles that will be used to populate the board.

      //
      // (create versions of this for the three card type options I want to build - marvel heroes + villains, owls & slightly different RGB values - if these images don't work, use 8-bit food icons + rgb values + geometrical shapes or Pokemon or tarot cards) **- V2 -**


// Populate board with the randomly selected tiles (class: face down) using a for loop to iterate over the arrays and pop them into a new array containing all 50 cards (each card has a match).


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

// When the player clicks a tile, flip tile over with an animation and toggle the class to face up; do a second time with your second click.

// sets up click handler on cards
$('.card').on('click', function() {
  var $currentCard = $(this);
  $currentCard.toggleClass("facedown");
});


// COMPARE CARDS ON CLICK OF CARD
// If tiles match, remove from board (add display: none class); if they do not match, flip both cards back over (face down class).

concentrationGame.makeGuess1 = function(XX) {
  if  ($('.card-').data === $('.card-').data) {
    $('.card').css('display', 'none');
  } else {
    $('.card').addClass('faceup') //XXXXXNEED SOMETHING FOR MATCHESXXX).toggleClass('facedown');
  }
}

});
// IS THIS WHAT I NEED TO BE COMPARING???? WHERE DO THESE MATCHES "LIVE"???? concentrationGame??????

// Continue on until all cards are selected.

// make some sort of you win big deal



// If player takes too long in between choices, wiggle matches or make glow.

// if no clicks for 5 seconds, then add class "wiggle"

// concentrationGame.noGuesses = function() {
//   if (no activity for 5 seconds) {
//     (MATCHES).addClass('wiggle');
//   }
// };

// Add click counter and timer

// concentrationGame.clickCounter = function() {
//   ('#game-board').click().text();
// };

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
