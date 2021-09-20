

class Player {
  constructor(board) {
    this.board = board;
    this.pos = [1, 1];
  }

  fireWeapon(weapon) {
    console.log("pew pew");
  }

  playerMove(dir) {
    let nextPos; 
    switch (dir) {
      case "up":
        nextPos = [this.pos[0] - 1, this.pos[1]];
        if (this.board.isValidPos(nextPos) && this.board.isPlayerPos(nextPos)) {
          this.pos = nextPos;
        }
        return;
      case "down":
        nextPos = [this.pos[0] + 1, this.pos[1]];
        if (this.board.isValidPos(nextPos) && this.board.isPlayerPos(nextPos)) this.pos = nextPos;
        return;
      case "left":
        nextPos = [this.pos[0], this.pos[1] - 1];
        if (this.board.isValidPos(nextPos) && this.board.isPlayerPos(nextPos)) this.pos = nextPos;
        return;
      case "right":
        nextPos = [this.pos[0], this.pos[1] + 1];
        if (this.board.isValidPos(nextPos) && this.board.isPlayerPos(nextPos)) this.pos = nextPos;
        return;
    }
  }



}

module.exports = Player;