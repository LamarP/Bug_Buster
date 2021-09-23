const CONSTANTS = {
  PLAYER_WIDTH:  30,
  PLAYER_HEIGHT:  40
};

class Player {
  constructor(board) {
    this.board = board;
    this.x = 120;
    this.y = 50;
    this.pos = [1, 1];
  }

  fireWeapon(weapon) {
    console.log("pew pew");
  }

  drawPlayer(ctx) {
      ctx.fillStyle = "blue";
      ctx.fillRect(this.x, this.y, CONSTANTS.PLAYER_WIDTH, CONSTANTS.PLAYER_HEIGHT);
    
  }

  playerMove(dir) {
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



}

module.exports = Player;