const Game = require("./game");
const Board = require("./board");
const Player = require("./player");
const Enemy = require("./enemy");

document.addEventListener("DOMContentLoaded", function () {
  let btn = document.createElement("button");
  btn.setAttribute("id", "btn");
  // btn.innerHTML = "Start";
  btn.addEventListener("click", function () {
    game.animateGame();
    document.querySelector("#welcome-page").classList.add("hidden");
    document.querySelector("#game-page").classList.remove("hidden");
    document.querySelector("#game-system").classList.add("hidden");
  });
  document.body.appendChild(btn);
  // document.querySelector("#welcome-page").classList.remove("hidden");
  const canvasEl = document.getElementsByTagName("canvas")[0];

  canvasEl.width = Game.DIM_X;
  canvasEl.height = Game.DIM_Y;

  const ctx = canvasEl.getContext("2d");
  const game = new Game(ctx);
  const pImg = document.getElementById("source");

  window.ctx = ctx;

  window.Board = Board;
  window.Player = Player;
  window.Enemy = Enemy;
  window.game = game;
  window.Game = Game;
  window.image = pImg;
  console.log("Webpack is working!");

  document.addEventListener("keydown", (e) => {
    e.preventDefault();

    const canvasEl = document.getElementsByTagName("canvas")[0];
    const ctx = canvasEl.getContext("2d");

    switch (e.key) {
      case "ArrowUp":
        game.player.playerMove("up");
        game.drawGame(ctx);
        break;
      case "ArrowDown":
        game.player.playerMove("down");
        game.drawGame(ctx);
        break;
      case "ArrowLeft":
        game.player.playerMove("left");
        game.drawGame(ctx);
        break;
      case "ArrowRight":
        game.player.playerMove("right");
        game.drawGame(ctx);
        break;
      case " ":
        game.fireWeapon();
        game.drawGame(ctx);
        break;
      // case "Enter":
      //   game.animateGame();
      //   document.querySelector("#welcome-page").classList.add("hidden");
      //   document.querySelector("#game-page").classList.remove("hidden");
      //   break;
    }
  });
});
