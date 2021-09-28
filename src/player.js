const CONSTANTS = {
  PLAYER_WIDTH:  30,
  PLAYER_HEIGHT:  40
};

class Player {
  constructor(board) {
    this.board = board;
    this.x = 120;
    this.y = 120;
    this.pos = [1, 1];
    this.health = 5;
  }

  drawPlayer(ctx) {
      ctx.drawImage(document.getElementById('source'), this.x - 10, this.y - 45); 
  }


  playerMove(dir) {
    let nextPos;
    let nextX;
    let nextY;
    // debugger;
    switch (dir) {
      case "up":
        nextPos = [this.pos[0] - 1, this.pos[1]];
        nextY = this.y - 50;
        if (this.board.isValidPos(nextPos) && this.board.isPlayerPos(nextPos) && !this.board.isEnemyPos(nextPos)) {
          this.pos = nextPos;
          this.y = nextY;
          
        }
        return;
      case "down":
        nextPos = [this.pos[0] + 1, this.pos[1]];
        nextY = this.y + 50;
        if (this.board.isValidPos(nextPos) && this.board.isPlayerPos(nextPos) && !this.board.isEnemyPos(nextPos)) {
          this.pos = nextPos;
          this.y = nextY;
          
        }
        return;
      case "left":
        nextPos = [this.pos[0], this.pos[1] - 1];
        nextX = this.x - 90;
        if (this.board.isValidPos(nextPos) && this.board.isPlayerPos(nextPos) && !this.board.isEnemyPos(nextPos)) {
          this.pos = nextPos;
          this.x = nextX;

        }
        return;
      case "right":
        nextPos = [this.pos[0], this.pos[1] + 1];
        nextX = this.x + 90;
        if (this.board.isValidPos(nextPos) && this.board.isPlayerPos(nextPos) && !this.board.isEnemyPos(nextPos)) {

          this.pos = nextPos;
          this.x = nextX;
        }
        return;
      case " ":
        this.fireWeapon();
    }
  }



}

module.exports = Player;