const Board = require("./board");
const Bullet = require("./bullet");
const Enemy = require("./enemy");
const Player = require("./player");

class Game {
  constructor(ctx) {
    this.ctx = ctx;
    this.board = new Board();
    this.score = 0;
    this.speed = "fast as fuck!";
    this.player = new Player(this.board);
    this.enemy = new Enemy(this.board);
    this.gameOver = false;
  }
  
  drawGame() {
    this.wipeGame();
    this.player.drawPlayer(this.ctx);
    this.enemy.drawEnemy(this.ctx);
  }

  wipeGame() {
    this.ctx.clearRect(0, 0, Game.DIM_X, Game.DIM_Y);
  }
  
  fireWeapon() {
    if (this.player.pos[0] === this.enemy.pos[0]) {
      this.enemy.health -= 1;
   }
  }


  gameIsOver() {
    this.gameOver = true;
  }
}
Game.DIM_X = 550;
Game.DIM_Y = 185;

  
  






module.exports = Game;
