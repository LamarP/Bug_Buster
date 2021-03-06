/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/board.js":
/*!**********************!*\
  !*** ./src/board.js ***!
  \**********************/
/***/ ((module) => {

eval("\nconst ENEMY_POS = [\n  [0, 3],\n  [0, 4],\n  [0, 5],\n  [1, 3],\n  [1, 4],\n  [1, 5],\n  [2, 3],\n  [2, 4],\n  [2, 5]\n]\nclass Board {\n  constructor() {\n    this.grid = this.makeGrid();\n  }\n\n\n  isValidPos(pos) {\n    return (0 <= pos[0]) &&\n      (pos[0] < 3) &&\n      (0 <= pos[1]) &&\n      (pos[1] < 6);\n  }\n\n  isPlayerPos(pos) {\n    const col = (pos[1]);\n    if (col < 3) {\n      return true;\n    } else {\n      return false;\n    }\n  }\n  isEnemyPos(pos) {\n    const col = (pos[1]);\n    if (col > 2) {\n      return true;\n    } else {\n      return false;\n    }\n  }\n\n  makeGrid() {\n    const grid = [];\n\n    for (let i = 0; i < 3; i++) {\n      grid.push([]);\n      for (let j = 0; j < 6; j++) {\n        grid[i].push(null);\n      }\n    }\n\n    return grid;\n  }\n\n  \n\n\n}\n\n\n\nmodule.exports = Board;\n\n//# sourceURL=webpack:///./src/board.js?");

/***/ }),

/***/ "./src/enemy.js":
/*!**********************!*\
  !*** ./src/enemy.js ***!
  \**********************/
/***/ ((module) => {

eval("\nconst CONSTANTS = {\n  ENEMY_WIDTH:  30,\n  ENEMY_HEIGHT:  40\n};\n\nclass Enemy {\n  constructor(board) {\n    this.board = board;\n    this.pos = [1, 4];\n    this.x = 400;\n    this.y = 120;\n    this.health = 5;\n  }\n\n  randomMoves() {\n\n    const moves = [\"up\", \"down\", \"left\", \"right\",];//\"fire\"\n    return moves[Math.floor(Math.random()*moves.length)];\n  }\n  drawEnemy(ctx) {\n    if (this.health === 0) {\n      ctx.drawImage(document.getElementById('source3'), this.x - 10, this.y - 45);\n      this.health = 5;\n    } else {\n      ctx.drawImage(document.getElementById('source2'), this.x - 10, this.y - 45); \n\n    }\n  }\n  // fireWeapon(weapon) {\n  //   console.log(\"pew pew\");\n  // }\n  enemyMove(dir) {\n    let nextPos;\n    let nextX;\n    let nextY;\n\n    switch (dir) {\n      case \"up\":\n        nextPos = [this.pos[0] - 1, this.pos[1]];\n        nextY = this.y - 50;\n        if (this.board.isValidPos(nextPos) && this.board.isEnemyPos(nextPos)) {\n          this.pos = nextPos;\n          this.y = nextY;\n          return true;\n        }\n        return false;\n      case \"down\":\n        nextPos = [this.pos[0] + 1, this.pos[1]];\n        nextY = this.y + 50;\n        if (this.board.isValidPos(nextPos) && this.board.isEnemyPos(nextPos)) {\n          this.pos = nextPos;\n          this.y = nextY;\n          return true;\n        }\n        return false;\n      case \"left\":\n        nextPos = [this.pos[0], this.pos[1] - 1];\n        nextX = this.x - 90;\n        if (this.board.isValidPos(nextPos) && this.board.isEnemyPos(nextPos)) {\n          this.pos = nextPos;\n          this.x = nextX;\n\n          return true;\n        }\n        return false;\n      case \"right\":\n        nextPos = [this.pos[0], this.pos[1] + 1];\n        nextX = this.x + 90;\n        if (this.board.isValidPos(nextPos) && this.board.isEnemyPos(nextPos)) {\n\n          this.pos = nextPos;\n          this.x = nextX;\n          return true;\n        }\n        return false;\n      // case \"fire\":\n      //   this.enemyFire();\n    }\n  }\n}\n\nmodule.exports = Enemy;\n\n//# sourceURL=webpack:///./src/enemy.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const Board = __webpack_require__(/*! ./board */ \"./src/board.js\");\nconst Enemy = __webpack_require__(/*! ./enemy */ \"./src/enemy.js\");\nconst Player = __webpack_require__(/*! ./player */ \"./src/player.js\");\n\nclass Game {\n  constructor(ctx) {\n    this.ctx = ctx;\n    this.board = new Board();\n    this.score = 0;\n    this.speed = 1000;\n    this.player = new Player(this.board);\n    this.enemy = new Enemy(this.board);\n    this.enemies = 0;\n    this.gameOver = false;\n    this.drawInstructions(this.ctx);\n\n  }\n\n  animateGame() {\n\n    setInterval(() => {\n\n      let move = this.enemy.randomMoves();\n      let didMove = this.enemy.enemyMove(move);  \n      while (!didMove) {\n        didMove = this.enemy.enemyMove(this.enemy.randomMoves());\n      }\n      this.drawGame();\n      this.enemyFire();\n    }, this.speed);\n  }\n\n  drawEndScreen(ctx) {\n    this.wipeGame();\n    this.gameOver = true;\n    ctx.font = \"46px Brush Script MT\";\n    ctx.fillStyle = \"#0095DD\";\n    ctx.fillText(\"Gunslinger...you have reached the clearing\", 10, 290);\n    ctx.fillText(\"at the end of the path \", 10, 330);\n  }\n  drawGame() {\n    if (this.player.health !== 0 && !this.gameOver) {\n      this.wipeGame();\n      this.player.drawPlayer(this.ctx);\n      this.enemy.drawEnemy(this.ctx);\n      this.drawScore(this.ctx);\n      this.drawHealth(this.ctx);\n      this.drawEnemyHealth(this.ctx);\n      this.drawInstructions(this.ctx);\n      this.drawBodyCount(this.ctx);\n    } else {\n      this.drawEndScreen(this.ctx);\n\n\n    }\n\n  }\n  drawScore(ctx) {\n    ctx.font = \"46px Brush Script MT\";\n    ctx.fillStyle = \"#0095DD\";\n    ctx.fillText(\"Score: \"+this.score, 8, 30);\n\n  }\n  drawInstructions(ctx) {\n    ctx.drawImage(document.getElementById('instructions'), 560, 16); \n  }\n  drawHealth(ctx) {\n    ctx.font = \"46px Brush Script MT\";\n    ctx.fillStyle = \"#0095DD\";\n    ctx.fillText(\"Health: \"+this.player.health, 8, 300);\n  }\n  drawEnemyHealth(ctx) {\n    ctx.font = \"46px Brush Script MT\";\n    ctx.fillStyle = \"#0095DD\";\n    ctx.fillText(\"Enemy: \"+this.enemy.health, 350, 300);\n  }\n  drawBodyCount(ctx) {\n    ctx.font = \"46px Brush Script MT\";\n    ctx.fillStyle = \"#0095DD\";\n    ctx.fillText(\"Defeated: \"+this.enemies, 350, 350);\n  }\n  wipeGame() {\n    this.ctx.clearRect(0, 0, Game.DIM_X, Game.DIM_Y);\n  }\n  \n  fireWeapon() {\n    if (this.player.pos[0] === this.enemy.pos[0]) {\n      this.enemy.health -= 1;\n      this.score += 10;\n      this.isDefeated();\n    }  \n  \n  }\n\n  enemyFire() {\n    if (this.player.pos[0] === this.enemy.pos[0]) {\n      this.player.health -= 1;\n   }\n  }\n  isDefeated() {\n    if (this.enemy.health === 0) {\n      this.speed -= 1000;\n      this.score += 150;\n      this.enemies += 1;\n    } else if (this.player.health === 0) {\n      this.gameIsOver();\n    }\n  }\n\n  gameIsOver() {\n    this.gameOver = true;\n  }\n  \n}\n//\nGame.DIM_X = 1550;\nGame.DIM_Y = 550;\n\n\n  \n  \n\n\n\n\n\n\nmodule.exports = Game;\n\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("const Game = __webpack_require__(/*! ./game */ \"./src/game.js\");\nconst Board = __webpack_require__(/*! ./board */ \"./src/board.js\");\nconst Player = __webpack_require__(/*! ./player */ \"./src/player.js\");\nconst Enemy = __webpack_require__(/*! ./enemy */ \"./src/enemy.js\");\n\ndocument.addEventListener(\"DOMContentLoaded\", function () {\n  let btn = document.createElement(\"button\");\n  btn.setAttribute(\"id\", \"btn\");\n  // btn.innerHTML = \"Start\";\n  btn.addEventListener(\"click\", function () {\n    game.animateGame();\n    document.querySelector(\"#welcome-page\").classList.add(\"hidden\");\n    document.querySelector(\"#game-page\").classList.remove(\"hidden\");\n    document.querySelector(\"#game-system\").classList.add(\"hidden\");\n  });\n  document.body.appendChild(btn);\n  // document.querySelector(\"#welcome-page\").classList.remove(\"hidden\");\n  const canvasEl = document.getElementsByTagName(\"canvas\")[0];\n\n  canvasEl.width = Game.DIM_X;\n  canvasEl.height = Game.DIM_Y;\n\n  const ctx = canvasEl.getContext(\"2d\");\n  const game = new Game(ctx);\n  const pImg = document.getElementById(\"source\");\n\n  window.ctx = ctx;\n\n  window.Board = Board;\n  window.Player = Player;\n  window.Enemy = Enemy;\n  window.game = game;\n  window.Game = Game;\n  window.image = pImg;\n  console.log(\"Webpack is working!\");\n\n  document.addEventListener(\"keydown\", (e) => {\n    e.preventDefault();\n\n    const canvasEl = document.getElementsByTagName(\"canvas\")[0];\n    const ctx = canvasEl.getContext(\"2d\");\n\n    switch (e.key) {\n      case \"ArrowUp\":\n        game.player.playerMove(\"up\");\n        game.drawGame(ctx);\n        break;\n      case \"ArrowDown\":\n        game.player.playerMove(\"down\");\n        game.drawGame(ctx);\n        break;\n      case \"ArrowLeft\":\n        game.player.playerMove(\"left\");\n        game.drawGame(ctx);\n        break;\n      case \"ArrowRight\":\n        game.player.playerMove(\"right\");\n        game.drawGame(ctx);\n        break;\n      case \" \":\n        game.fireWeapon();\n        game.drawGame(ctx);\n        break;\n      // case \"Enter\":\n      //   game.animateGame();\n      //   document.querySelector(\"#welcome-page\").classList.add(\"hidden\");\n      //   document.querySelector(\"#game-page\").classList.remove(\"hidden\");\n      //   break;\n    }\n  });\n});\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/***/ ((module) => {

eval("const CONSTANTS = {\n  PLAYER_WIDTH:  30,\n  PLAYER_HEIGHT:  40\n};\n\nclass Player {\n  constructor(board) {\n    this.board = board;\n    this.x = 120;\n    this.y = 120;\n    this.pos = [1, 1];\n    this.health = 10;\n  }\n\n  drawPlayer(ctx) {\n      ctx.drawImage(document.getElementById('source'), this.x - 10, this.y - 45); \n  }\n\n\n  playerMove(dir) {\n    let nextPos;\n    let nextX;\n    let nextY;\n    // debugger;\n    switch (dir) {\n      case \"up\":\n        nextPos = [this.pos[0] - 1, this.pos[1]];\n        nextY = this.y - 50;\n        if (this.board.isValidPos(nextPos) && this.board.isPlayerPos(nextPos) && !this.board.isEnemyPos(nextPos)) {\n          this.pos = nextPos;\n          this.y = nextY;\n          \n        }\n        return;\n      case \"down\":\n        nextPos = [this.pos[0] + 1, this.pos[1]];\n        nextY = this.y + 50;\n        if (this.board.isValidPos(nextPos) && this.board.isPlayerPos(nextPos) && !this.board.isEnemyPos(nextPos)) {\n          this.pos = nextPos;\n          this.y = nextY;\n          \n        }\n        return;\n      case \"left\":\n        nextPos = [this.pos[0], this.pos[1] - 1];\n        nextX = this.x - 90;\n        if (this.board.isValidPos(nextPos) && this.board.isPlayerPos(nextPos) && !this.board.isEnemyPos(nextPos)) {\n          this.pos = nextPos;\n          this.x = nextX;\n\n        }\n        return;\n      case \"right\":\n        nextPos = [this.pos[0], this.pos[1] + 1];\n        nextX = this.x + 90;\n        if (this.board.isValidPos(nextPos) && this.board.isPlayerPos(nextPos) && !this.board.isEnemyPos(nextPos)) {\n\n          this.pos = nextPos;\n          this.x = nextX;\n        }\n        return;\n      case \" \":\n        this.fireWeapon();\n    }\n  }\n\n\n\n}\n\nmodule.exports = Player;\n\n//# sourceURL=webpack:///./src/player.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;