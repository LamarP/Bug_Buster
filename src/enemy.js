
const CONSTANTS = {
  ENEMY_WIDTH:  30,
  ENEMY_HEIGHT:  40
};

class Enemy {
  constructor(board) {
    this.board = board;
    this.pos = [1, 4];
    this.x = 400;
    this.y = 120;
    this.health = 5;

  }

  randomMoves() {

    const moves = ["up", "down", "left", "right",];//"fire"
    return moves[Math.floor(Math.random()*moves.length)];
  }
  drawEnemy(ctx) {
    ctx.drawImage(document.getElementById('source2'), this.x - 10, this.y - 45); 
  }
  // fireWeapon(weapon) {
  //   console.log("pew pew");
  // }
  enemyMove(dir) {
    let nextPos;
    let nextX;
    let nextY;

    switch (dir) {
      case "up":
        nextPos = [this.pos[0] - 1, this.pos[1]];
        nextY = this.y - 50;
        if (this.board.isValidPos(nextPos) && this.board.isEnemyPos(nextPos)) {
          this.pos = nextPos;
          this.y = nextY;
          return true;
        }
        return false;
      case "down":
        nextPos = [this.pos[0] + 1, this.pos[1]];
        nextY = this.y + 50;
        if (this.board.isValidPos(nextPos) && this.board.isEnemyPos(nextPos)) {
          this.pos = nextPos;
          this.y = nextY;
          return true;
        }
        return false;
      case "left":
        nextPos = [this.pos[0], this.pos[1] - 1];
        nextX = this.x - 90;
        if (this.board.isValidPos(nextPos) && this.board.isEnemyPos(nextPos)) {
          this.pos = nextPos;
          this.x = nextX;

          return true;
        }
        return false;
      case "right":
        nextPos = [this.pos[0], this.pos[1] + 1];
        nextX = this.x + 90;
        if (this.board.isValidPos(nextPos) && this.board.isEnemyPos(nextPos)) {

          this.pos = nextPos;
          this.x = nextX;
          return true;
        }
        return false;
      // case "fire":
      //   this.enemyFire();
    }
  }
}

module.exports = Enemy;