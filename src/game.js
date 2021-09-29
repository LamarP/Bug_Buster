const Board = require("./board");
const Enemy = require("./enemy");
const Player = require("./player");

class Game {
  constructor(ctx) {
    this.ctx = ctx;
    this.board = new Board();
    this.score = 0;
    this.speed = 1000;
    this.player = new Player(this.board);
    this.enemy = new Enemy(this.board);
    this.enemies = 0;
    this.gameOver = false;
    this.drawInstructions(this.ctx);
    // this.animateGame();
    // document.getElementById("whatever").addEventListener(this.resetGame.bind(this));
  }
  // resetGame(ctx) {

  // }
  animateGame() {

    setInterval(() => {

      let move = this.enemy.randomMoves();
      let didMove = this.enemy.enemyMove(move);  
      while (!didMove) {
        didMove = this.enemy.enemyMove(this.enemy.randomMoves());
      }
      this.drawGame();
      this.enemyFire();
    }, this.speed);
  }

  drawEndScreen(ctx) {
    this.wipeGame();
    this.gameOver = true;
    ctx.font = "46px Brush Script MT";
    ctx.fillStyle = "#0095DD";
    ctx.fillText("Gunslinger...you have reached the clearing", 10, 50);
    ctx.fillText("at the end of the path ", 10, 60);
  }
  drawGame() {
    if (this.player.health !== 0 && !this.gameOver) {
      this.wipeGame();
      this.player.drawPlayer(this.ctx);
      this.enemy.drawEnemy(this.ctx);
      this.drawScore(this.ctx);
      this.drawHealth(this.ctx);
      this.drawEnemyHealth(this.ctx);
      this.drawInstructions(this.ctx);
      this.drawBodyCount(this.ctx);
    } else {
      this.drawEndScreen(this.ctx);


    }

  }
  drawScore(ctx) {
    ctx.font = "46px Brush Script MT";
    ctx.fillStyle = "#0095DD";
    ctx.fillText("Score: "+this.score, 8, 30);

  }
  drawInstructions(ctx) {
    ctx.drawImage(document.getElementById('instructions'), 560, 16); 
  }
  drawHealth(ctx) {
    ctx.font = "46px Brush Script MT";
    ctx.fillStyle = "#0095DD";
    ctx.fillText("Health: "+this.player.health, 8, 300);
  }
  drawEnemyHealth(ctx) {
    ctx.font = "46px Brush Script MT";
    ctx.fillStyle = "#0095DD";
    ctx.fillText("Enemy: "+this.enemy.health, 350, 300);
  }
  drawBodyCount(ctx) {
    ctx.font = "46px Brush Script MT";
    ctx.fillStyle = "#0095DD";
    ctx.fillText("Defeated: "+this.enemies, 350, 350);
  }
  wipeGame() {
    this.ctx.clearRect(0, 0, Game.DIM_X, Game.DIM_Y);
  }
  
  fireWeapon() {
    if (this.player.pos[0] === this.enemy.pos[0]) {
      this.enemy.health -= 1;
      this.score += 10;
      this.isDefeated();
    }  
  
  }

  enemyFire() {
    if (this.player.pos[0] === this.enemy.pos[0]) {
      this.player.health -= 1;
   }
  }
  isDefeated() {
    if (this.enemy.health === 0) {
      this.speed -= 1000;
      this.score += 150;
      this.enemies += 1;
    } else if (this.player.health === 0) {
      this.gameIsOver();
    }
  }

  gameIsOver() {
    this.gameOver = true;
  }
  
}
//
Game.DIM_X = 1550;
Game.DIM_Y = 550;


  
  






module.exports = Game;
