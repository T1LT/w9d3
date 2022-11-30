class View {
  constructor(game, el) {}

  setupBoard() {
    let body = document.getElementById("body");
    let ul = document.createElement("ul");
    let li = document.createElement("li");
    body.appendChild(ul);
    for (let i = 1; i <= 9; i++) {
      li.dataset.pos = i;
      li.innerHTML = "X";
      ul.appendChild(li);
      li = document.createElement("li");
    }
  }

  bindEvents() {}

  handleClick(e) {}

  makeMove(square) {}
}

module.exports = View;
