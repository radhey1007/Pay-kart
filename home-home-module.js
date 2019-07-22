(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");







var HomePageModule = /** @class */ (function () {
    function HomePageModule() {
    }
    HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]
                    }
                ])
            ],
            declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]]
        })
    ], HomePageModule);
    return HomePageModule;
}());



/***/ }),

/***/ "./src/app/home/home.page.html":
/*!*************************************!*\
  !*** ./src/app/home/home.page.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-toolbar color=\"secondary\">\r\n    <ion-title>Pay-Commerce</ion-title>\r\n    <ion-buttons slot=\"primary\">\r\n        <ion-button >\r\n          <ion-icon slot=\"icon-only\" name=\"search\"></ion-icon>\r\n        </ion-button>\r\n      </ion-buttons>\r\n      <ion-searchbar placeholder=\"Search Favorites\"></ion-searchbar>\r\n  <ion-buttons slot=\"primary\">\r\n    <ion-button button color=\"dark\" (click)=\"goToLoginPage()\" expand=\"block\" fill=\"outline\">\r\n        Sign-In\r\n        <ion-icon slot=\"end\" name=\"create\"></ion-icon>\r\n      </ion-button>\r\n    <ion-button button color=\"dark\" (click)=\"goToRegisterPage()\" expand=\"block\" fill=\"outline\">\r\n        Sign-Up\r\n        <ion-icon slot=\"end\" name=\"create\"></ion-icon>\r\n      </ion-button>\r\n  </ion-buttons>\r\n  <!-- <ion-title>Secondary Toolbar</ion-title> -->\r\n</ion-toolbar>\r\n\r\n  <ion-segment class=\"pdbottom470\">\r\n    <ion-segment-button value=\"all\" checked>\r\n      All\r\n    </ion-segment-button>\r\n    <ion-segment-button value=\"favorites\">\r\n      Favorites\r\n    </ion-segment-button>\r\n    <ion-segment-button value=\"popular\">\r\n      Popular\r\n    </ion-segment-button>\r\n  </ion-segment>\r\n\r\n\r\n<!-- <ion-toolbar>\r\n  <ion-buttons slot=\"secondary\">\r\n    <ion-button fill=\"solid\">\r\n      <ion-icon slot=\"start\" name=\"contact\"></ion-icon>\r\n      Contact\r\n    </ion-button>\r\n  </ion-buttons>\r\n  <ion-title>Solid Buttons</ion-title>\r\n  <ion-buttons slot=\"primary\">\r\n    <ion-button fill=\"solid\" color=\"secondary\">\r\n      Help\r\n      <ion-icon slot=\"end\" name=\"help-circle\"></ion-icon>\r\n    </ion-button>\r\n  </ion-buttons>\r\n</ion-toolbar> -->\r\n\r\n<!-- <ion-toolbar>\r\n  <ion-buttons slot=\"secondary\">\r\n    <ion-button>\r\n      Account\r\n    </ion-button>\r\n  </ion-buttons>\r\n  <ion-buttons slot=\"primary\">\r\n    <ion-button color=\"danger\">\r\n      Edit\r\n    </ion-button>\r\n  </ion-buttons>\r\n  <ion-title>Text Only Buttons</ion-title>\r\n</ion-toolbar> -->\r\n<ion-toolbar color=\"dark\">\r\n  <ion-title></ion-title>\r\n</ion-toolbar>"

/***/ }),

/***/ "./src/app/home/home.page.scss":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".pdbottom470 {\n  padding-bottom: 470px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9EOlxcUl9OX0RcXFBheS1rYXJ0L3NyY1xcYXBwXFxob21lXFxob21lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHFCQUFxQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wZGJvdHRvbTQ3MHtcclxuICAgIHBhZGRpbmctYm90dG9tOiA0NzBweDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/home/home.page.ts":
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");




var HomePage = /** @class */ (function () {
    function HomePage(router, navCtrl) {
        var _this = this;
        this.router = router;
        this.navCtrl = navCtrl;
        this.showToolbar = false;
        this.goToRegisterPage = function () {
            _this.router.navigateByUrl('/registration');
        };
        this.goToLoginPage = function () {
            _this.router.navigateByUrl('/login');
        };
    }
    HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.page.html */ "./src/app/home/home.page.html"),
            styles: [__webpack_require__(/*! ./home.page.scss */ "./src/app/home/home.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]])
    ], HomePage);
    return HomePage;
}());



/***/ })

}]);
//# sourceMappingURL=home-home-module.js.map