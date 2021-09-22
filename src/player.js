const CONSTANTS = {
  PLAYER_WIDTH:  30,
  PLAYER_HEIGHT:  40
};

class Player {
  constructor(board) {
    this.board = board;
    this.x = 1;
    this.y = 1;
    // this.pos = [1, 1];
  }

  fireWeapon(weapon) {
    console.log("pew pew");
  }

  drawPlayer(ctx) {
      ctx.fillStyle = "blue";
      ctx.fillRect(this.x, this.y, CONSTANTS.PLAYER_WIDTH, CONSTANTS.PLAYER_HEIGHT);
    
  //     var image = document.querySelector("source");
  //     var canvas = document.querySelector("canvas");
      
  //     var ctx = canvas.getContext("2d");
      
  //     //3 arg verison
  //     // ctx.drawImage( image, 0, 0, );
      
      
  //     // return; //remove this line to see other versions
      
  //     //5 arg verison
  //     ctx.drawImage( image, 0, 0, 50, 50 );
      
  //     //9 arg verison
  //     // ctx.drawImage( 
  //     //    image, 
  //     //    0, 0, //Where to start the grab (x,y of source image)
  //     //    100, 100, //How much to grab (width, height)
  //     //    0, 0, //Where to plop the grab on the canvas (x,y of canvas)
  //     //    200, 200 //How large to plop the grab (width, height of incoming stamp)
  //     // );
      
      
      
   
   
   
  //  //
  //   setTimeout(() => {
  //      this.drawPlayer();
  //   }, 300)
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