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
      // ctx.fillStyle = "blue";
      // ctx.fillRect(this.x, this.y, CONSTANTS.PLAYER_WIDTH, CONSTANTS.PLAYER_HEIGHT);
      // ctx.drawImage("../assets/images/player.png", 33, 71, 104, 124, 21, 20, 87, 104); 
      ctx.drawImage(document.getElementById('source'), this.x - 10, this.y - 45); 
      // ctx.drawImage(document.getElementById('source'), 0, 0, 483, 913, this.x - 75, this.y - 175, 150, 350); 
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
        console.log(this.pos);
        console.log(this.y);
        console.log(this.x);
        return;
      case "down":
        nextPos = [this.pos[0] + 1, this.pos[1]];
        nextY = this.y + 50;
        if (this.board.isValidPos(nextPos) && this.board.isPlayerPos(nextPos) && !this.board.isEnemyPos(nextPos)) {
          this.pos = nextPos;
          this.y = nextY;
          
        }
        console.log(this.pos);
        console.log(this.y);
        console.log(this.x);
        return;
      case "left":
        nextPos = [this.pos[0], this.pos[1] - 1];
        nextX = this.x - 90;
        if (this.board.isValidPos(nextPos) && this.board.isPlayerPos(nextPos) && !this.board.isEnemyPos(nextPos)) {
          this.pos = nextPos;
          this.x = nextX;

        }
        console.log(this.pos);
        console.log(this.y);
        console.log(this.x);
        return;
      case "right":
        nextPos = [this.pos[0], this.pos[1] + 1];
        nextX = this.x + 90;
        if (this.board.isValidPos(nextPos) && this.board.isPlayerPos(nextPos) && !this.board.isEnemyPos(nextPos)) {

          this.pos = nextPos;
          this.x = nextX;
        }
        console.log(this.pos);
        console.log(this.y);
        console.log(this.x);
        return;
    }
  }



}

module.exports = Player;