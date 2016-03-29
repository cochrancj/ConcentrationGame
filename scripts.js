console.log("...loaded");

var makeBoard;

$(document).ready(function() {

// function initBoard() {
//
//   $('.card').delay(100).fadeOut().fadeIn('slow');
//
// // $(".card").fadeIn(100).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
// };
// initBoard();

    // $('.card').each(function(index) {
    //   $(this).toggleClass('facedown')
    //         .delay(index * 200)
    //         .fadeOut(1500);


  // $('#start').click(function() {
  //   $('.card').each(function(index) {
  //     $(this).removeClass('faceup')
  //           // .delay(index * 200)
  //           .fadeOut(1500);
  //   });
  // });
  // };

  // initBoard();

//WHEN THE ARRAY IS LIKE THIS, THE CARDS POPULATE FACE UP AND WON'T PLAY NICE

  // var owls = [
  //   'images/owls-01.png',
  //   'images/owls-02.png',
  //   'images/owls-03.png',
  //   'images/owls-04.png',
  //   'images/owls-05.png',
  //   'images/owls-06.png',
  //   'images/owls-07.png',
  //   'images/owls-08.png',
  //   'images/owls-09.png',
  //   'images/owls-10.png',
  //   'images/owls-11.png',
  //   'images/owls-12.png',
  //   'images/owls-13.png',
  //   'images/owls-14.png',
  //   'images/owls-15.png',
  //   'images/owls-16.png',
  //   'images/owls-17.png',
  //   'images/owls-18.png',
  //   'images/owls-19.png',
  //   'images/owls-20.png',
  //   'images/owls-21.png',
  //   'images/owls-22.png',
  //   'images/owls-23.png',
  //   'images/owls-24.png',
  //   'images/owls-25.png',
  //   'images/owls-01.png',
  //   'images/owls-02.png',
  //   'images/owls-03.png',
  //   'images/owls-04.png',
  //   'images/owls-05.png',
  //   'images/owls-06.png',
  //   'images/owls-07.png',
  //   'images/owls-08.png',
  //   'images/owls-09.png',
  //   'images/owls-10.png',
  //   'images/owls-11.png',
  //   'images/owls-12.png',
  //   'images/owls-13.png',
  //   'images/owls-14.png',
  //   'images/owls-15.png',
  //   'images/owls-16.png',
  //   'images/owls-17.png',
  //   'images/owls-18.png',
  //   'images/owls-19.png',
  //   'images/owls-20.png',
  //   'images/owls-21.png',
  //   'images/owls-22.png',
  //   'images/owls-23.png',
  //   'images/owls-24.png',
  //   'images/owls-25.png'
  // ]

//WHEN THE ARRAY IS SET UP LIKE THIS, THE CLICK HANDLER WORKS BUT THE CARDS AREN'T POPULATING

  // var owls = [
  //   {src: 'images/owls-01.png', attr: 01},
  //   {src: 'images/owls-02.png', attr: 02},
  //   {src: 'images/owls-03.png', attr: 03},
  //   {src: 'images/owls-04.png', attr: 04},
  //   {src: 'images/owls-05.png', attr: 05},
  //   {src: 'images/owls-06.png', attr: 06},
  //   {src: 'images/owls-07.png', attr: 07},
  //   {src: 'images/owls-08.png', attr: 08},
  //   {src: 'images/owls-09.png', attr: 09},
  //   {src: 'images/owls-10.png', attr: 10},
  //   {src: 'images/owls-11.png', attr: 11},
  //   {src: 'images/owls-12.png', attr: 12},
  //   {src: 'images/owls-13.png', attr: 13},
  //   {src: 'images/owls-14.png', attr: 14},
  //   {src: 'images/owls-15.png', attr: 15},
  //   {src: 'images/owls-16.png', attr: 16},
  //   {src: 'images/owls-17.png', attr: 17},
  //   {src: 'images/owls-18.png', attr: 18},
  //   {src: 'images/owls-19.png', attr: 19},
  //   {src: 'images/owls-20.png', attr: 20},
  //   {src: 'images/owls-21.png', attr: 21},
  //   {src: 'images/owls-22.png', attr: 22},
  //   {src: 'images/owls-23.png', attr: 23},
  //   {src: 'images/owls-24.png', attr: 24},
  //   {src: 'images/owls-25.png', attr: 25},
  //   {src: 'images/owls-01.png', attr: 01},
  //   {src: 'images/owls-02.png', attr: 02},
  //   {src: 'images/owls-03.png', attr: 03},
  //   {src: 'images/owls-04.png', attr: 04},
  //   {src: 'images/owls-05.png', attr: 05},
  //   {src: 'images/owls-06.png', attr: 06},
  //   {src: 'images/owls-07.png', attr: 07},
  //   {src: 'images/owls-08.png', attr: 08},
  //   {src: 'images/owls-09.png', attr: 09},
  //   {src: 'images/owls-10.png', attr: 10},
  //   {src: 'images/owls-11.png', attr: 11},
  //   {src: 'images/owls-12.png', attr: 12},
  //   {src: 'images/owls-13.png', attr: 13},
  //   {src: 'images/owls-14.png', attr: 14},
  //   {src: 'images/owls-15.png', attr: 15},
  //   {src: 'images/owls-16.png', attr: 16},
  //   {src: 'images/owls-17.png', attr: 17},
  //   {src: 'images/owls-18.png', attr: 18},
  //   {src: 'images/owls-19.png', attr: 19},
  //   {src: 'images/owls-20.png', attr: 20},
  //   {src: 'images/owls-21.png', attr: 21},
  //   {src: 'images/owls-22.png', attr: 22},
  //   {src: 'images/owls-23.png', attr: 23},
  //   {src: 'images/owls-24.png', attr: 24},
  //   {src: 'images/owls-25.png', attr: 25}
  //  ]

  //WHEN THE ARRAY IS SET UP LIKE THIS, THE CLICK HANDLER WORKS BUT THE CARDS AREN'T POPULATING

  // var owls = [
  //   {src: 'images/owls-01.png', data: 01},
  //   {src: 'images/owls-02.png', data: 02},
  //   {src: 'images/owls-03.png', data: 03},
  //   {src: 'images/owls-04.png', data: 04},
  //   {src: 'images/owls-05.png', data: 05},
  //   {src: 'images/owls-06.png', data: 06},
  //   {src: 'images/owls-07.png', data: 07},
  //   {src: 'images/owls-08.png', data: 08},
  //   {src: 'images/owls-09.png', data: 09},
  //   {src: 'images/owls-10.png', data: 10},
  //   {src: 'images/owls-11.png', data: 11},
  //   {src: 'images/owls-12.png', data: 12},
  //   {src: 'images/owls-13.png', data: 13},
  //   {src: 'images/owls-14.png', data: 14},
  //   {src: 'images/owls-15.png', data: 15},
  //   {src: 'images/owls-16.png', data: 16},
  //   {src: 'images/owls-17.png', data: 17},
  //   {src: 'images/owls-18.png', data: 18},
  //   {src: 'images/owls-19.png', data: 19},
  //   {src: 'images/owls-20.png', data: 20},
  //   {src: 'images/owls-21.png', data: 21},
  //   {src: 'images/owls-22.png', data: 22},
  //   {src: 'images/owls-23.png', data: 23},
  //   {src: 'images/owls-24.png', data: 24},
  //   {src: 'images/owls-25.png', data: 25},
  //   {src: 'images/owls-01.png', data: 01},
  //   {src: 'images/owls-02.png', data: 02},
  //   {src: 'images/owls-03.png', data: 03},
  //   {src: 'images/owls-04.png', data: 04},
  //   {src: 'images/owls-05.png', data: 05},
  //   {src: 'images/owls-06.png', data: 06},
  //   {src: 'images/owls-07.png', data: 07},
  //   {src: 'images/owls-08.png', data: 08},
  //   {src: 'images/owls-09.png', data: 09},
  //   {src: 'images/owls-10.png', data: 10},
  //   {src: 'images/owls-11.png', data: 11},
  //   {src: 'images/owls-12.png', data: 12},
  //   {src: 'images/owls-13.png', data: 13},
  //   {src: 'images/owls-14.png', data: 14},
  //   {src: 'images/owls-15.png', data: 15},
  //   {src: 'images/owls-16.png', data: 16},
  //   {src: 'images/owls-17.png', data: 17},
  //   {src: 'images/owls-18.png', data: 18},
  //   {src: 'images/owls-19.png', data: 19},
  //   {src: 'images/owls-20.png', data: 20},
  //   {src: 'images/owls-21.png', data: 21},
  //   {src: 'images/owls-22.png', data: 22},
  //   {src: 'images/owls-23.png', data: 23},
  //   {src: 'images/owls-24.png', data: 24},
  //   {src: 'images/owls-25.png', data: 25}
  //  ]

// THIS IS THE SAME AS ABOVE, JUST A MORE MANAGEABLE SIZE
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
    {src: 'images/owls-10.png', data: 10},
    {src: 'images/owls-01.png', data: 01},
    {src: 'images/owls-02.png', data: 02},
    {src: 'images/owls-03.png', data: 03},
    {src: 'images/owls-04.png', data: 04},
    {src: 'images/owls-05.png', data: 05},
    {src: 'images/owls-06.png', data: 06},
    {src: 'images/owls-07.png', data: 07},
    {src: 'images/owls-08.png', data: 08},
    {src: 'images/owls-09.png', data: 09},
    {src: 'images/owls-10.png', data: 10}
   ]

//THIS IS THE SAME AS THE FIRST, JUST A MORE MANAGEABLE SIZE

  //  var owls = [
  //    'images/owls-01.png',
  //    'images/owls-02.png',
  //    'images/owls-03.png',
  //    'images/owls-04.png',
  //    'images/owls-05.png',
  //    'images/owls-06.png',
  //    'images/owls-07.png',
  //    'images/owls-08.png',
  //    'images/owls-09.png',
  //    'images/owls-10.png',
  //    'images/owls-01.png',
  //    'images/owls-02.png',
  //    'images/owls-03.png',
  //    'images/owls-04.png',
  //    'images/owls-05.png',
  //    'images/owls-06.png',
  //    'images/owls-07.png',
  //    'images/owls-08.png',
  //    'images/owls-09.png',
  //    'images/owls-10.png'
  //  ]

// ADD DATA ATTRIBUTES TO EACH IMAGE SO THOSE ATTRIBUTES CAN BE COMPARED LATER ON

makeBoard =  function(){
    for (var i = 0; i < owls.length; i++) {
      $('#game-board').append($('<div>'). addClass('card ' + 'faceup ' + i).css('background-image', 'url(' + owls[i] + ')'));
    };
  };

// THIS DOES NOT WORK - CHANGING URL TO SRC TO COORDINATE WITH ARRAY OF OBJECTS
  // makeBoard =  function(){
  //     for (var i = 0; i < owls.length; i++) {
  //       $('#game-board').append($('<div>'). addClass('card ' + 'faceup ' + i).css('background-image', 'src(' + owls[i] + ')'));
  //     };
  //   };


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

// THIS WORKS TO BLINK THE CARDS ON LOAD - NOT
function initBoard() {

  // $('.card').delay(100).fadeOut().fadeIn('slow');

    // $('.card').toggleClass('facedown')delay(100).fadeOut().fadeIn('slow');

$(".card").fadeIn(100).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
};
initBoard();

// When the board is ready and the page loads, show all cards briefly on load (toggle class face up with a timeout of less than a second) so player can preview matches.
//
// Flip tiles back over to begin - use a nifty animation.

//flashes front side of cards on load for a few seconds. THIS IS NOT WORKING
// function initBoard() {
//
// $('#start').bind('click', function (e) {
//   $('.card').each(function (index) {
//     $(this).toggleClass('facedown')
//           .delay(index * 200)
//           .fadeOut(1500);
//   });
//   e.preventDefault();
// });
// };

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
//

// THIS IS NOT WORKING AT ALL

// function compareCards() {
//   if $('.card').class('faceup') && (style="background-image: url("images/owls-01.png")") + $('.card').class('faceup') && (style="background-image: url("images/owls-01.png")") {
//     $('.card').css('display,' 'none');
//   } else if $('.card').class('faceup') && (style="background-image: url("images/owls-02.png")") + $('.card').class('faceup') && (style="background-image: url("images/owls-02.png")") {
//     $('.card').css('display,' 'none');
//   } else if $('.card').class('faceup') && (style="background-image: url("images/owls-03.png")") + $('.card').class('faceup') && (style="background-image: url("images/owls-03.png")") {
//     $('.card').css('display,' 'none');
// } else if $('.card').class('faceup') && (style="background-image: url("images/owls-04.png")") + $('.card').class('faceup') && (style="background-image: url("images/owls-04.png")") {
//   $('.card').css('display,' 'none');
// } else if $('.card').class('faceup') && (style="background-image: url("images/owls-05.png")") + $('.card').class('faceup') && (style="background-image: url("images/owls-05.png")") {
//   $('.card').css('display,' 'none');
// } else if $('.card').class('faceup') && (style="background-image: url("images/owls-06.png")") + $('.card').class('faceup') && (style="background-image: url("images/owls-06.png")") {
//   $('.card').css('display,' 'none');
// } else if $('.card').class('faceup') && (style="background-image: url("images/owls-07.png")") + $('.card').class('faceup') && (style="background-image: url("images/owls-07.png")") {
//   $('.card').css('display,' 'none');
// } else if $('.card').class('faceup') && (style="background-image: url("images/owls-08.png")") + $('.card').class('faceup') && (style="background-image: url("images/owls-08.png")") {
//   $('.card').css('display,' 'none');
// } else if $('.card').class('faceup') && (style="background-image: url("images/owls-09.png")") + $('.card').class('faceup') && (style="background-image: url("images/owls-09.png")") {
//   $('.card').css('display,' 'none');
// } else if $('.card').class('faceup') && (style="background-image: url("images/owls-10.png")") + $('.card').class('faceup') && (style="background-image: url("images/owls-10.png")") {
//   $('.card').css('display,' 'none');
// } ;
//
// compareCards();

// function compareCards() {
//   if ($('.card').class('faceup') && $('.card').attr ===) {
//     $('.card').css('display', 'none');
//   } else {
//     $('.card').toggleClass('faceup');
//   }

//   if  ($('.card').data === $('.card').data) {
//     $('.card').css('display', 'none');
//   } else {
//     $('.card').addClass('faceup');
//   }
// }

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
