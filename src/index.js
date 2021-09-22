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
  const pImg = document.getElementById('source');

  // pImg.addEventListener('load', e => {
  //   ctx.drawImage(pImg, 33, 71, 104, 124, 21, 20, 87, 104);
  // });  

  
  window.MovingObject = MovingObject;
  window.ctx = ctx;
  window.board = Board;
  window.player = Player;
  window.enemy = Enemy;
  window.image = pImg;
  console.log("Webpack is working!");
  // new GameView(game, ctx).start();
});