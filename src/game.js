const Board = require("./board");
const Bullet = require("./bullet");
const Enemy = require("./enemy");

function Game() {
    this.board = new Board();
    this.score = 0;
    this.speed = "fast as fuck!";
    this.enemies = [];
    this.bullets = [];
    this.players = [];
    // this.health = 5;
    // this.addEnemies();
  }

  Game.FPS = 32;
  Game.BG_COLOR = "#000000";
  Game.DIM_X = 1000;
  Game.DIM_Y = 600;
  Game.prototype.add = function add(object) {
    if (object instanceof Enemy) {
      this.enemies.push(object);
      //non-updated
    } else if (object instanceof Attack) {
      this.bullets.push(object);
      //non-updated
    } else if (object instanceof Player) {
      this.players.push(object);
      //non-updated
    } else {
      throw new Error("unknown type of object");
    }
  };
  
 
  
  Game.prototype.addPlayer = function addPlayer() {
    const player = new Player({
      pos: this.startPosition(),
      game: this
    });
  
    this.add(player);
  
    return player;
  };






module.exports = Game;
// idea: instead of wack-a-mole have a cpu player 
//with randomized attacks and movements