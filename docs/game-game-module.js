(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["game-game-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/summer-league/game/game.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/summer-league/game/game.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>game works!</p>\n"

/***/ }),

/***/ "./src/app/summer-league/game/game-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/summer-league/game/game-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: GameRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameRoutingModule", function() { return GameRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _game_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./game.component */ "./src/app/summer-league/game/game.component.ts");




var routes = [
    {
        path: '',
        component: _game_component__WEBPACK_IMPORTED_MODULE_3__["GameComponent"],
        data: { routeName: 'game', routeLabel: 'Game' }
    }
];
var GameRoutingModule = /** @class */ (function () {
    function GameRoutingModule() {
    }
    GameRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], GameRoutingModule);
    return GameRoutingModule;
}());



/***/ }),

/***/ "./src/app/summer-league/game/game.component.scss":
/*!********************************************************!*\
  !*** ./src/app/summer-league/game/game.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N1bW1lci1sZWFndWUvZ2FtZS9nYW1lLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/summer-league/game/game.component.ts":
/*!******************************************************!*\
  !*** ./src/app/summer-league/game/game.component.ts ***!
  \******************************************************/
/*! exports provided: GameComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameComponent", function() { return GameComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var GameComponent = /** @class */ (function () {
    function GameComponent() {
    }
    GameComponent.prototype.ngOnInit = function () {
    };
    GameComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'ccc-game',
            template: __webpack_require__(/*! raw-loader!./game.component.html */ "./node_modules/raw-loader/index.js!./src/app/summer-league/game/game.component.html"),
            styles: [__webpack_require__(/*! ./game.component.scss */ "./src/app/summer-league/game/game.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], GameComponent);
    return GameComponent;
}());



/***/ }),

/***/ "./src/app/summer-league/game/game.module.ts":
/*!***************************************************!*\
  !*** ./src/app/summer-league/game/game.module.ts ***!
  \***************************************************/
/*! exports provided: GameModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameModule", function() { return GameModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _game_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./game-routing.module */ "./src/app/summer-league/game/game-routing.module.ts");
/* harmony import */ var _game_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./game.component */ "./src/app/summer-league/game/game.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");





var GameModule = /** @class */ (function () {
    function GameModule() {
    }
    GameModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_game_component__WEBPACK_IMPORTED_MODULE_3__["GameComponent"]],
            imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], _game_routing_module__WEBPACK_IMPORTED_MODULE_2__["GameRoutingModule"]]
        })
    ], GameModule);
    return GameModule;
}());



/***/ })

}]);
//# sourceMappingURL=game-game-module.js.map