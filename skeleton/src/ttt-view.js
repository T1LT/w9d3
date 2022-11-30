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
    ul.addEventListener("click", this.handleClick.bind(this))
  }


  handleClick(e) {
    let pos = parseInt(e.target.dataset.pos)
    console.log(e)
    let posArr = [(Math.ceil(pos / 3) - 1), ((pos - 1) % 3)]
    this.game.playMove(posArr)
    e.target.innerHTML = this.game.currentPlayer
    e.target.style.backgroundColor = "white"
    // if (this.game.currentPlayer === "x") {
    //   e.target.style.color = "blue"
    // } else {
    //   e.target.style.color = "red"
    // }
    e.stopPropagation()
  }

  makeMove(square) {}
}

module.exports = View;
