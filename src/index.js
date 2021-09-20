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
  const game = new Game();
  window.MovingObject = MovingObject;
  window.ctx = ctx;
  window.board = Board;
  window.player = Player;
  window.enemy = Enemy;
  
  console.log("Webpack is working!");
  // new GameView(game, ctx).start();
});