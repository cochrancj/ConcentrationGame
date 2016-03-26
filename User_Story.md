------Concentration Game User Story------

As a user, I want to click on tiles and pick matches to win the game. I expect the cards to flip like they do in real life, and I would like hints if I take too long in between guesses. I also want to see the matches at the beginning of each round briefly so I have somewhere to start. It would also be nice if I could pick the cards I'm looking for. I want to use a finished-feeling project and want to interact with a site that moves smoothly and looks slick and finished.

------Concentration Game Pseudo Code------

Build a game board containing 50 tiles.

Build a 'pick your cards' function.

Build two arrays of 25 tiles each (2 identical arrays) to store the tiles that will be used to populate the board.
    (create versions of this for the three card type options I want to build - marvel heroes + villains, owls & slightly different RGB values - if these images don't work, use 8-bit food icons + rgb values + geometrical shapes or Pokemon or tarot cards)

Use Math.floor & Math.random to randomize tiles in each array.

Populate board with the randomly selected tiles (class: face down).

Show all cards briefly on load (toggle class face up with a timeout of less than a second).

Flip tiles back over to begin.

When the player clicks a tile, flip tile over with an animation and toggle the class to face up; do a second time with your second click.

If tiles match, remove from board (add display: none class); if they do not match, flip both cards back over (face down class).

Continue on until all cards are selected.

If player takes too long in between choices, wiggle matches or make glow.
