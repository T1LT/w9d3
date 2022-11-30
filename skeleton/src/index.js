const View = require("./ttt-view");
const Game = require("../ttt_node/game");

document.addEventListener("DOMContentLoaded", () => {
  // Your code here
  const game = new Game();
  // body / figure
  const body = document.getElementById("body");
  const view = new View(game, body);
});
