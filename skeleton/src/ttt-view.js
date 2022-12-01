class View {
  constructor(game, el) {
    this.game = game
    this.el = el
    this.setupBoard()
  }
  
  setupBoard() {
    let ul = document.createElement("ul");
    let li = document.createElement("li");
    this.el.appendChild(ul);
    for (let i = 1; i <= 9; i++) {
      li.dataset.pos = i;
      ul.appendChild(li);
      li = document.createElement("li");
    }
    let div = document.createElement("div");
    div.setAttribute("id", "game-state");
    div.classList.add("hidden");
    this.el.appendChild(div);
    ul.addEventListener("click", this.handleClick.bind(this))
  }


  handleClick(e) {
    let pos = parseInt(e.target.dataset.pos)
    console.log(e)
    let posArr = [(Math.ceil(pos / 3) - 1), ((pos - 1) % 3)]
    this.game.playMove(posArr)
    e.target.innerHTML = this.game.currentPlayer
    e.target.style.backgroundColor = "white"
    this.winEval();
    e.stopPropagation();
  }

  winEval() {
    if (this.game.isOver() && this.game.winner()) {
      let div = document.getElementById("game-state");
      let winner = this.game.winner() === "x" ? "o" : "x";
      div.innerHTML = `GRATS ${winner.toUpperCase()}`;
      div.classList.remove("hidden");
      // call helper method to add styles
      // pass in winner to helper method
      this.endStateColor(winner);
    } else if (this.game.isOver()) {
      let div = document.getElementById("game-state");
      div.innerHTML = "YOU BOTH SUCK!";
      div.classList.remove("hidden");
      // call same helper method to add styles
      this.endStateColor();
    }
  }

  endStateColor(winner) {
    let listElements = document.querySelectorAll("li");
    for (let node of listElements) {
      node.style.backgroundColor = "white";
      if (node.innerText === winner) {
        node.classList.add("winner");
      } else {
        node.classList.add("loser");
      }
    }
  }
}

module.exports = View;
