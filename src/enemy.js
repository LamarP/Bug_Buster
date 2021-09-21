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

class Enemy {
  constructor(board) {
    this.board = board;
    this.pos = [1, 4];
    //"this" refers to the owner of the function
  }

  randomMoves() {

    const moves = ["up", "down", "left", "right"];
    return moves[Math.floor(Math.random()*moves.length)];
  }

  // fireWeapon(weapon) {
  //   console.log("pew pew");
  // }

  enemyMove() {
    let dir = this.randomMoves();
    let nextPos;
    switch (dir) {
      case "up":
        nextPos = [this.pos[0] - 1, this.pos[1]];
        if (this.board.isValidPos(nextPos) && this.board.isEnemyPos(nextPos)) {
          this.pos = nextPos;
        }
        return;
      case "down":
        nextPos = [this.pos[0] + 1, this.pos[1]];
        if (this.board.isValidPos(nextPos) && this.board.isEnemyPos(nextPos)) this.pos = nextPos;
        return;
      case "left":
        nextPos = [this.pos[0], this.pos[1] - 1];
        if (this.board.isValidPos(nextPos) && this.board.isEnemyPos(nextPos)) this.pos = nextPos;
        return;
      case "right":
        nextPos = [this.pos[0], this.pos[1] + 1];
        if (this.board.isValidPos(nextPos) && this.board.isEnemyPos(nextPos)) this.pos = nextPos;
        return;
    }
  }
}

module.exports = Enemy;