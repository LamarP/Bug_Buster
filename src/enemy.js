// const ENEMY_POS = [
//   [0, 3],
//   [0, 4],
//   [0, 5],
//   [1, 3],
//   [1, 4],
//   [1, 5],
//   [2, 3],
//   [2, 4],
//   [2, 5]
// ]
const CONSTANTS = {
  ENEMY_WIDTH:  30,
  ENEMY_HEIGHT:  40
};

class Enemy {
  constructor(board) {
    this.board = board;
    this.pos = [1, 4];
    this.x = 400;
    this.y = 50;
    //"this" refers to the owner of the function
  }

  randomMoves() {

    const moves = ["up", "down", "left", "right"];
    return moves[Math.floor(Math.random()*moves.length)];
  }
  drawEnemy(ctx) {
    ctx.fillStyle = "red";
    ctx.fillRect(this.x, this.y, CONSTANTS.ENEMY_WIDTH, CONSTANTS.ENEMY_HEIGHT);
  
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
        if (this.board.isValidPos(nextPos) && this.board.isPlayerPos(nextPos)) {
          this.pos = nextPos;
          this.y = nextY;
        }
        return;
      case "down":
        nextPos = [this.pos[0] + 1, this.pos[1]];
        nextY = this.y + 60;
        if (this.board.isValidPos(nextPos) && this.board.isPlayerPos(nextPos)) {
          this.pos = nextPos;
          this.y = nextY;
          return;

        }
      case "left":
        nextPos = [this.pos[0], this.pos[1] - 1];
        nextX = this.x - 90;
        if (this.board.isValidPos(nextPos) && this.board.isPlayerPos(nextPos)) {
          this.pos = nextPos;
          this.x = nextX;

        }
        return;
      case "right":
        nextPos = [this.pos[0], this.pos[1] + 1];
        nextX = this.x + 90;
        if (this.board.isValidPos(nextPos) && this.board.isPlayerPos(nextPos)) {

        }
        this.pos = nextPos;
        this.x = nextX;
        return;
    }
  }

  // enemyMove() {
  //   let dir = this.randomMoves();
  //   let nextPos;
  //   switch (dir) {
  //     case "up":
  //       nextPos = [this.pos[0] - 1, this.pos[1]];
  //       if (this.board.isValidPos(nextPos) && this.board.isEnemyPos(nextPos)) {
  //         this.pos = nextPos;
  //       }
  //       return;
  //     case "down":
  //       nextPos = [this.pos[0] + 1, this.pos[1]];
  //       if (this.board.isValidPos(nextPos) && this.board.isEnemyPos(nextPos)) this.pos = nextPos;
  //       return;
  //     case "left":
  //       nextPos = [this.pos[0], this.pos[1] - 1];
  //       if (this.board.isValidPos(nextPos) && this.board.isEnemyPos(nextPos)) this.pos = nextPos;
  //       return;
  //     case "right":
  //       nextPos = [this.pos[0], this.pos[1] + 1];
  //       if (this.board.isValidPos(nextPos) && this.board.isEnemyPos(nextPos)) this.pos = nextPos;
  //       return;
  //   }
  // }
}

module.exports = Enemy;