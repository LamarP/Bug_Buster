const Game = require("./game");
const Board = require("./board");
const Player = require("./player");
const Enemy = require("./enemy");
// const GameView = require("./game_view");
const MovingObject = require("./moving_object.js");
document.addEventListener("DOMContentLoaded", function () {
  const canvasEl = document.getElementsByTagName("canvas")[0];
  
  canvasEl.width = Game.DIM_X;
  canvasEl.height = Game.DIM_Y;
  
  const ctx = canvasEl.getContext("2d");
  const game = new Game(ctx);
  const pImg = document.getElementById('source');

     

  
  window.MovingObject = MovingObject;
  window.ctx = ctx;
  window.Board = Board;
  window.Player = Player;
  window.Enemy = Enemy;
  window.game = game;
  window.Game = Game;
  window.image = pImg;
  console.log("Webpack is working!");
  // new GameView(game, ctx).start();
});

document.addEventListener("keydown", (e) => {
  e.preventDefault();
  // if (start) {
    const canvasEl = document.getElementsByTagName("canvas")[0];
  const ctx = canvasEl.getContext("2d");
  // debugger;
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
        // game.player.playerMove(" ");
        game.fireWeapon();
        game.drawGame(ctx);
        break;
      case "Enter":
        game.animateGame();
        break;
    // }
  }
});

