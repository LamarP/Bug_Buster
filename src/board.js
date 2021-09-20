
const ENEMY_POS = [
  [0, 3],
  [0, 4],
  [0, 5],
  [1, 3],
  [1, 4],
  [1, 5],
  [2, 3],
  [2, 4],
  [2, 5]
]
class Board {
  constructor() {
    this.grid = this.makeGrid();
  }


  isValidPos(pos) {
    return (0 <= pos[0]) &&
      (pos[0] < 3) &&
      (0 <= pos[1]) &&
      (pos[1] < 6);
  }

  isPlayerPos(pos) {
    const col = (pos[1]);
    if (col < 3) {
      return true;
    } else {
      return false;
    }
  }
  isEnemyPos(pos) {
    const col = (pos[1]);
    if (col > 2) {
      return true;
    } else {
      return false;
    }
  }

  makeGrid() {
    const grid = [];

    for (let i = 0; i < 3; i++) {
      grid.push([]);
      for (let j = 0; j < 6; j++) {
        grid[i].push(null);
      }
    }

    return grid;
  }

  

  placeEnemies() {
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 6; j++) {
        let pos = [i,j];
        if (this.isValidPos(pos) && this.isEnemyPos(pos)) {
          this.grid[i][j] = "E";

        }
      }
    }
  }

}



module.exports = Board;