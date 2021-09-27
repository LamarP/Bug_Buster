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

/***/ "./src/bullet.js":
/*!***********************!*\
  !*** ./src/bullet.js ***!
  \***********************/
/***/ (() => {

eval("\n\n//# sourceURL=webpack:///./src/bullet.js?");

/***/ }),

/***/ "./src/enemy.js":
/*!**********************!*\
  !*** ./src/enemy.js ***!
  \**********************/
/***/ ((module) => {

eval("\nconst CONSTANTS = {\n  ENEMY_WIDTH:  30,\n  ENEMY_HEIGHT:  40\n};\n\nclass Enemy {\n  constructor(board) {\n    this.board = board;\n    this.pos = [1, 4];\n    this.x = 400;\n    this.y = 50;\n    this.health = 5;\n\n  }\n\n  randomMoves() {\n\n    const moves = [\"up\", \"down\", \"left\", \"right\"];\n    return moves[Math.floor(Math.random()*moves.length)];\n  }\n  drawEnemy(ctx) {\n    ctx.drawImage(document.getElementById('source2'), this.x - 10, this.y - 45); \n  }\n  // fireWeapon(weapon) {\n  //   console.log(\"pew pew\");\n  // }\n  enemyMove(dir) {\n    let nextPos;\n    let nextX;\n    let nextY;\n\n    switch (dir) {\n      case \"up\":\n        nextPos = [this.pos[0] - 1, this.pos[1]];\n        nextY = this.y - 50;\n        if (this.board.isValidPos(nextPos) && this.board.isEnemyPos(nextPos)) {\n          this.pos = nextPos;\n          this.y = nextY;\n          return true;\n        }\n        return false;\n      case \"down\":\n        nextPos = [this.pos[0] + 1, this.pos[1]];\n        nextY = this.y + 50;\n        if (this.board.isValidPos(nextPos) && this.board.isEnemyPos(nextPos)) {\n          this.pos = nextPos;\n          this.y = nextY;\n          return true;\n        }\n        return false;\n      case \"left\":\n        nextPos = [this.pos[0], this.pos[1] - 1];\n        nextX = this.x - 90;\n        if (this.board.isValidPos(nextPos) && this.board.isEnemyPos(nextPos)) {\n          this.pos = nextPos;\n          this.x = nextX;\n\n          return true;\n        }\n        return false;\n      case \"right\":\n        nextPos = [this.pos[0], this.pos[1] + 1];\n        nextX = this.x + 90;\n        if (this.board.isValidPos(nextPos) && this.board.isEnemyPos(nextPos)) {\n\n          this.pos = nextPos;\n          this.x = nextX;\n          return true;\n        }\n        return false;\n    }\n  }\n}\n\nmodule.exports = Enemy;\n\n//# sourceURL=webpack:///./src/enemy.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const Board = __webpack_require__(/*! ./board */ \"./src/board.js\");\nconst Bullet = __webpack_require__(/*! ./bullet */ \"./src/bullet.js\");\nconst Enemy = __webpack_require__(/*! ./enemy */ \"./src/enemy.js\");\nconst Player = __webpack_require__(/*! ./player */ \"./src/player.js\");\n\nclass Game {\n  constructor(ctx) {\n    this.ctx = ctx;\n    this.board = new Board();\n    this.score = 0;\n    this.speed = 1000;\n    this.player = new Player(this.board);\n    this.enemy = new Enemy(this.board);\n    this.gameOver = false;\n    this.animateGame();\n  }\n  \n  animateGame() {\n\n    setInterval(() => {\n\n      let move = this.enemy.randomMoves();\n      let didMove = this.enemy.enemyMove(move);  \n      while (!didMove) {\n        didMove = this.enemy.enemyMove(this.enemy.randomMoves());\n      }\n      this.drawGame();\n      console.log(\"ah yeah!!!\");\n    }, this.speed);\n  }\n\n  drawGame() {\n    this.wipeGame();\n    this.player.drawPlayer(this.ctx);\n    this.enemy.drawEnemy(this.ctx);\n  }\n\n  wipeGame() {\n    this.ctx.clearRect(0, 0, Game.DIM_X, Game.DIM_Y);\n  }\n  \n  fireWeapon() {\n    if (this.player.pos[0] === this.enemy.pos[0]) {\n      this.enemy.health -= 1;\n      this.score += 10;\n   }\n  }\n\n\n  gameIsOver() {\n    this.gameOver = true;\n  }\n}\nGame.DIM_X = 550;\nGame.DIM_Y = 185;\n\n\n  \n  \n\n\n\n\n\n\nmodule.exports = Game;\n\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("const Game = __webpack_require__(/*! ./game */ \"./src/game.js\");\nconst Board = __webpack_require__(/*! ./board */ \"./src/board.js\");\nconst Player = __webpack_require__(/*! ./player */ \"./src/player.js\");\nconst Enemy = __webpack_require__(/*! ./enemy */ \"./src/enemy.js\");\n// const GameView = require(\"./game_view\");\nconst MovingObject = __webpack_require__(/*! ./moving_object.js */ \"./src/moving_object.js\");\ndocument.addEventListener(\"DOMContentLoaded\", function () {\n  const canvasEl = document.getElementsByTagName(\"canvas\")[0];\n  \n  canvasEl.width = Game.DIM_X;\n  canvasEl.height = Game.DIM_Y;\n  \n  const ctx = canvasEl.getContext(\"2d\");\n  const game = new Game(ctx);\n  const pImg = document.getElementById('source');\n\n     \n\n  \n  window.MovingObject = MovingObject;\n  window.ctx = ctx;\n  window.Board = Board;\n  window.Player = Player;\n  window.Enemy = Enemy;\n  window.game = game;\n  window.Game = Game;\n  window.image = pImg;\n  console.log(\"Webpack is working!\");\n  // new GameView(game, ctx).start();\n});\n\ndocument.addEventListener(\"keydown\", (e) => {\n  e.preventDefault();\n  // if (start) {\n    const canvasEl = document.getElementsByTagName(\"canvas\")[0];\n  const ctx = canvasEl.getContext(\"2d\");\n  // debugger;\n    switch (e.key) {\n      case \"ArrowUp\":\n        game.player.playerMove(\"up\");\n        game.drawGame(ctx);\n        break;\n      case \"ArrowDown\":\n        game.player.playerMove(\"down\");\n        game.drawGame(ctx);\n        break;\n      case \"ArrowLeft\":\n        game.player.playerMove(\"left\");\n        game.drawGame(ctx);\n        break;\n      case \"ArrowRight\":\n        game.player.playerMove(\"right\");\n        game.drawGame(ctx);\n        break;\n      case \" \":\n        // game.player.playerMove(\" \");\n        game.fireWeapon();\n        game.drawGame(ctx);\n        break;\n    // }\n  }\n});\n\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/moving_object.js":
/*!******************************!*\
  !*** ./src/moving_object.js ***!
  \******************************/
/***/ ((module) => {

eval("// const Util = require(\"./util\");\n\nfunction MovingObject(options) {\n  this.pos = options.pos;\n  this.vel = options.vel;\n  this.radius = options.radius;\n  this.color = options.color;\n  this.game = options.game;\n}\n\n// MovingObject.prototype.collideWith = function collideWith(otherObject) {\n//   // default do nothing\n// };\n\nMovingObject.prototype.draw = function draw(ctx) {\n  ctx.fillStyle = this.color;\n\n  ctx.beginPath();\n  ctx.arc(\n    this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI, true\n  );\n  ctx.fill();\n};\n\n// MovingObject.prototype.isCollidedWith = function isCollidedWith(otherObject) {\n//   const centerDist = Util.dist(this.pos, otherObject.pos);\n//   return centerDist < (this.radius + otherObject.radius);\n// };\n\n// MovingObject.prototype.isWrappable = true;\n\nconst NORMAL_FRAME_TIME_DELTA = 1000 / 60;\nMovingObject.prototype.move = function move(timeDelta) {\n  // timeDelta is number of milliseconds since last move\n  // if the computer is busy the time delta will be larger\n  // in this case the MovingObject should move farther in this frame\n  // velocity of object is how far it should move in 1/60th of a second\n  const velocityScale = timeDelta / NORMAL_FRAME_TIME_DELTA,\n      offsetX = this.vel[0] * velocityScale,\n      offsetY = this.vel[1] * velocityScale;\n\n  this.pos = [this.pos[0] + offsetX, this.pos[1] + offsetY];\n\n  // if (this.game.isOutOfBounds(this.pos)) {\n  //   if (this.isWrappable) {\n  //     this.pos = this.game.wrap(this.pos);\n  //   } else {\n  //     this.remove();\n  //   }\n  // }\n};\n\n// MovingObject.prototype.remove = function remove() {\n//   this.game.remove(this);\n// };\n\nmodule.exports = MovingObject;\n\n//# sourceURL=webpack:///./src/moving_object.js?");

/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/***/ ((module) => {

eval("const CONSTANTS = {\n  PLAYER_WIDTH:  30,\n  PLAYER_HEIGHT:  40\n};\n\nclass Player {\n  constructor(board) {\n    this.board = board;\n    this.x = 120;\n    this.y = 50;\n    this.pos = [1, 1];\n  }\n\n  drawPlayer(ctx) {\n      ctx.drawImage(document.getElementById('source'), this.x - 10, this.y - 45); \n  }\n\n  playerMove(dir) {\n    let nextPos;\n    let nextX;\n    let nextY;\n    // debugger;\n    switch (dir) {\n      case \"up\":\n        nextPos = [this.pos[0] - 1, this.pos[1]];\n        nextY = this.y - 50;\n        if (this.board.isValidPos(nextPos) && this.board.isPlayerPos(nextPos) && !this.board.isEnemyPos(nextPos)) {\n          this.pos = nextPos;\n          this.y = nextY;\n          \n        }\n        return;\n      case \"down\":\n        nextPos = [this.pos[0] + 1, this.pos[1]];\n        nextY = this.y + 50;\n        if (this.board.isValidPos(nextPos) && this.board.isPlayerPos(nextPos) && !this.board.isEnemyPos(nextPos)) {\n          this.pos = nextPos;\n          this.y = nextY;\n          \n        }\n        return;\n      case \"left\":\n        nextPos = [this.pos[0], this.pos[1] - 1];\n        nextX = this.x - 90;\n        if (this.board.isValidPos(nextPos) && this.board.isPlayerPos(nextPos) && !this.board.isEnemyPos(nextPos)) {\n          this.pos = nextPos;\n          this.x = nextX;\n\n        }\n        return;\n      case \"right\":\n        nextPos = [this.pos[0], this.pos[1] + 1];\n        nextX = this.x + 90;\n        if (this.board.isValidPos(nextPos) && this.board.isPlayerPos(nextPos) && !this.board.isEnemyPos(nextPos)) {\n\n          this.pos = nextPos;\n          this.x = nextX;\n        }\n        return;\n      case \" \":\n        this.fireWeapon();\n    }\n  }\n\n\n\n}\n\nmodule.exports = Player;\n\n//# sourceURL=webpack:///./src/player.js?");

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