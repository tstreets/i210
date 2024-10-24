/*
 Modify the game object:

 Add two properties: lives - initially 3, and coins - initially 0.
 Add a getter called points that returns coins * 10.
 Add a playerDies() method that subtracts 1 from lives if lives is greater than 0.
 Add a newGame() method that sets lives to 3 and coins to 0.
*/

const game = {
  lives: 3,
  coins: 0,
  name: "Ty",
  points() {
    return this.coins * 10;
  },
  playerDies() {
    if (this.lives > 0) {
      this.lives -= 1;
    }

    if (this.lives < -3) {
      // do something
    } else {
      console.log("Player can't die anymore. Leave them alone.");
    }
  },
  newGame() {
    this.lives = 3;
    this.coins = 0;
  },
};

game.coins += 3;
console.log("Points: " + game.points());

game.playerDies();
game.playerDies();
game.playerDies();
game.playerDies();
console.log("Lives: " + game.lives);

game.newGame();
console.log("Lives: " + game.lives);

console.log("Name length: " + game.name.length);
