const View = require("./ttt-view");
const Game = require("../ttt_node/game");

document.addEventListener("DOMContentLoaded", () => {
  // Your code here
  const game = new Game();
  const body = document.getElementById("body");
  const view = new View(game, body);
  // game.winner => returns winner's mark
  // game.isOver => returns true or false
  // hidden div
});
