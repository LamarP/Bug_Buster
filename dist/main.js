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

eval("\nconst ENEMY_POS = [\n  [0, 3],\n  [0, 4],\n  [0, 5],\n  [1, 3],\n  [1, 4],\n  [1, 5],\n  [2, 3],\n  [2, 4],\n  [2, 5]\n]\nclass Board {\n  constructor() {\n    this.grid = this.makeGrid();\n  }\n\n\n  isValidPos(pos) {\n    return (0 <= pos[0]) &&\n      (pos[0] < 3) &&\n      (0 <= pos[1]) &&\n      (pos[1] < 6);\n  }\n\n  isPlayerPos(pos) {\n    const col = (pos[1]);\n    if (col < 3) {\n      return true;\n    } else {\n      return false;\n    }\n  }\n  isEnemyPos(pos) {\n    const col = (pos[1]);\n    if (col > 2) {\n      return true;\n    } else {\n      return false;\n    }\n  }\n\n  makeGrid() {\n    const grid = [];\n\n    for (let i = 0; i < 3; i++) {\n      grid.push([]);\n      for (let j = 0; j < 6; j++) {\n        grid[i].push(null);\n      }\n    }\n\n    return grid;\n  }\n\n  \n\n  // placeEnemies() {\n  //   // places enemies on enemy side of board\n  //   const numEnemies = 9;\n  //   this.grid.map((pos) => (\n\n  //   ))\n  // }\n\n}\n\n\n\nmodule.exports = Board;\n\n//# sourceURL=webpack:///./src/board.js?");

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
/***/ (() => {

eval("const ENEMY_POS = [\n  [0, 3],\n  [0, 4],\n  [0, 5],\n  [1, 3],\n  [1, 4],\n  [1, 5],\n  [2, 3],\n  [2, 4],\n  [2, 5]\n]\n\nclass enemies {\n  constructor(board) {\n    this.board = board;\n    //\"this\" refers to the owner of the function\n  }\n\n  placeRandomEnemies() {\n    //randomly places enemies on enemy side of board\n  }\n}\n\n//# sourceURL=webpack:///./src/enemy.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const Board = __webpack_require__(/*! ./board */ \"./src/board.js\");\nconst Bullet = __webpack_require__(/*! ./bullet */ \"./src/bullet.js\");\nconst Enemy = __webpack_require__(/*! ./enemy */ \"./src/enemy.js\");\n\nfunction Game() {\n    this.board = new Board();\n    this.score = 0;\n    this.speed = \"fast as fuck!\";\n    this.enemies = [];\n    this.bullets = [];\n    this.players = [];\n    // this.health = 5;\n    // this.addEnemies();\n  }\n\n  Game.FPS = 32;\n  Game.BG_COLOR = \"#000000\";\n  Game.DIM_X = 1000;\n  Game.DIM_Y = 600;\n  Game.prototype.add = function add(object) {\n    if (object instanceof Enemy) {\n      this.enemies.push(object);\n      //non-updated\n    } else if (object instanceof Attack) {\n      this.bullets.push(object);\n      //non-updated\n    } else if (object instanceof Player) {\n      this.players.push(object);\n      //non-updated\n    } else {\n      throw new Error(\"unknown type of object\");\n    }\n  };\n  \n \n  \n  Game.prototype.addPlayer = function addPlayer() {\n    const player = new Player({\n      pos: this.startPosition(),\n      game: this\n    });\n  \n    this.add(player);\n  \n    return player;\n  };\n\n\n\n\n\n\nmodule.exports = Game;\n// idea: instead of wack-a-mole have a cpu player \n//with randomized attacks and movements\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("const Game = __webpack_require__(/*! ./game */ \"./src/game.js\");\nconst Board = __webpack_require__(/*! ./board */ \"./src/board.js\");\nconst Player = __webpack_require__(/*! ./player */ \"./src/player.js\");\n// const GameView = require(\"./game_view\");\nconst MovingObject = __webpack_require__(/*! ./moving_object.js */ \"./src/moving_object.js\");\ndocument.addEventListener(\"DOMContentLoaded\", function () {\n  const canvasEl = document.getElementsByTagName(\"canvas\")[0];\n  canvasEl.width = Game.DIM_X;\n  canvasEl.height = Game.DIM_Y;\n\n  const ctx = canvasEl.getContext(\"2d\");\n  const game = new Game();\n  window.MovingObject = MovingObject;\n  window.ctx = ctx;\n  window.board = Board;\n  window.player = Player;\n  console.log(\"Webpack is working!\");\n  // new GameView(game, ctx).start();\n});\n\n//# sourceURL=webpack:///./src/index.js?");

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

eval("\n\nclass Player {\n  constructor(board) {\n    this.board = board;\n    this.pos = [1, 1];\n  }\n\n  fireWeapon(weapon) {\n    console.log(\"pew pew\");\n  }\n\n  playerMove(dir) {\n    let nextPos;\n    switch (dir) {\n      case \"up\":\n        nextPos = [this.pos[0] - 1, this.pos[1]];\n        if (this.board.isValidPos(nextPos) && this.board.isPlayerPos(nextPos)) {\n          this.pos = nextPos;\n        }\n        return;\n      case \"down\":\n        nextPos = [this.pos[0] + 1, this.pos[1]];\n        if (this.board.isValidPos(nextPos) && this.board.isPlayerPos(nextPos)) this.pos = nextPos;\n        return;\n      case \"left\":\n        nextPos = [this.pos[0], this.pos[1] - 1];\n        if (this.board.isValidPos(nextPos) && this.board.isPlayerPos(nextPos)) this.pos = nextPos;\n        return;\n      case \"right\":\n        nextPos = [this.pos[0], this.pos[1] + 1];\n        if (this.board.isValidPos(nextPos) && this.board.isPlayerPos(nextPos)) this.pos = nextPos;\n        return;\n    }\n  }\n\n\n\n}\n\nmodule.exports = Player;\n\n//# sourceURL=webpack:///./src/player.js?");

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