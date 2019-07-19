(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-login-login-module"],{

/***/ "./src/app/pages/login/login.module.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.module.ts ***!
  \*********************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login.page */ "./src/app/pages/login/login.page.ts");







var routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]
    }
];
var LoginPageModule = /** @class */ (function () {
    function LoginPageModule() {
    }
    LoginPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
        })
    ], LoginPageModule);
    return LoginPageModule;
}());



/***/ }),

/***/ "./src/app/pages/login/login.page.html":
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.page.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar color=\"primary\">\r\n    <ion-title>login</ion-title>   \r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content color=\"secondary\" padding>\r\n    <form class=\"form\" [formGroup]=\"angForm\">\r\n      <ion-grid>\r\n        <ion-row color=\"primary\" justify-content-center>\r\n          <ion-col >           \r\n            <ion-item>\r\n              <ion-label position=\"floating\" >Email</ion-label>\r\n              <ion-input type=\"text\" formControlName=\"email\" #email ></ion-input>\r\n            </ion-item>\r\n            <div class=\"validation-errors\">\r\n              <ng-container *ngFor=\"let validation of validation_messages.email\">\r\n                <div class=\"error-message\" *ngIf=\"angForm.get('email').hasError(validation.type) && (angForm.get('email').dirty || angForm.get('email').touched)\">\r\n                  <ion-icon name=\"information-circle-outline\"></ion-icon> {{ validation.message }}\r\n                </div>\r\n              </ng-container>\r\n            </div>           \r\n          </ion-col>\r\n          </ion-row>\r\n          <ion-row>\r\n          <ion-col >                \r\n            <ion-item>\r\n              <ion-label position=\"floating\" >Password</ion-label>\r\n              <ion-input type=\"text\" formControlName=\"password\" #password ></ion-input>\r\n            </ion-item>\r\n                <div class=\"validation-errors\">\r\n                    <ng-container *ngFor=\"let validation of validation_messages.password\">\r\n                      <div class=\"error-message\" *ngIf=\"angForm.get('password').hasError(validation.type) && (angForm.get('password').dirty || angForm.get('password').touched)\">\r\n                        <ion-icon name=\"information-circle-outline\"></ion-icon> {{ validation.message }}\r\n                      </div>\r\n                    </ng-container>\r\n                  </div>  \r\n            </ion-col>\r\n        </ion-row> \r\n      </ion-grid>\r\n\r\n      <ion-row>\r\n        <ion-col col-9></ion-col>\r\n        <ion-col><p class=\"go-to-login\"><a (click)=\"goToForgotPasswordPage()\">Forgot Password</a></p></ion-col>\r\n      </ion-row>\r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-button button color=\"dark\" (click)=\"login(angForm.value)\" expand=\"block\"  [disabled]=\"!angForm.valid\" fill=\"outline\">\r\n            LOGIN\r\n            <ion-icon slot=\"end\" name=\"create\"></ion-icon>\r\n          </ion-button>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row>\r\n        <ion-col col-5>\r\n          <ion-button color=\"dark\" fill=\"outline\">\r\n            Facebook\r\n            <ion-icon slot=\"end\" name=\"create\"></ion-icon>\r\n          </ion-button>\r\n        </ion-col>\r\n        <ion-col col-2>\r\n        </ion-col>\r\n        <ion-col col-5>\r\n          <ion-button color=\"danger\" fill=\"outline\">\r\n            Google\r\n            <ion-icon slot=\"end\" name=\"create\"></ion-icon>\r\n          </ion-button>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row>     \r\n      </ion-row>\r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-button button color=\"dark\" class=\"submit-btn\" (click)=\"goToRegisterPage()\" expand=\"block\" fill=\"outline\">\r\n            Create an account\r\n            <ion-icon slot=\"end\" name=\"create\"></ion-icon>\r\n          </ion-button>\r\n        </ion-col>\r\n      </ion-row>\r\n    </form>\r\n  </ion-content>\r\n  <ion-footer class=\"login-footer\" >\r\n    <ion-toolbar color=\"dark\">\r\n      <ion-title> <a href=\"javascript:void(0)\"><span class=\"rightHelp\"><ion-icon name=\"help-circle\"></ion-icon></span></a></ion-title>\r\n    </ion-toolbar>\r\n  </ion-footer>\r\n"

/***/ }),

/***/ "./src/app/pages/login/login.page.scss":
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".error-message {\n  color: red;\n  font-size: 14px;\n  margin-left: 10px;\n  margin-top: 10px; }\n\n.submit-btn {\n  margin-top: 40px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbG9naW4vRDpcXFJfTl9EXFxQYXkta2FydC9zcmNcXGFwcFxccGFnZXNcXGxvZ2luXFxsb2dpbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFRSxVQUFVO0VBQ1YsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixnQkFBZ0IsRUFBQTs7QUFHbEI7RUFDRSxnQkFBZ0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2xvZ2luL2xvZ2luLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5lcnJvci1tZXNzYWdlXHJcbntcclxuICBjb2xvcjogcmVkO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBtYXJnaW4tbGVmdDogMTBweDtcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG59XHJcblxyXG4uc3VibWl0LWJ0biB7XHJcbiAgbWFyZ2luLXRvcDogNDBweDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/login/login.page.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/login/login.page.ts ***!
  \*******************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");





var LoginPage = /** @class */ (function () {
    function LoginPage(router, formBuilder, navCtrl) {
        var _this = this;
        this.router = router;
        this.formBuilder = formBuilder;
        this.navCtrl = navCtrl;
        this.validation_messages = {};
        this.createForm = function () {
            _this.angForm = _this.formBuilder.group({
                email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
                ])),
                password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(5),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(10)
                ]))
            });
        };
        this.setValidationMessages = function () {
            _this.validation_messages = {
                'email': [
                    { type: 'required', message: 'Email is required.' },
                    { type: 'pattern', message: 'Please enter a valid email.' }
                ],
                'password': [
                    { type: 'required', message: 'Password is required.' },
                    { type: 'minlength', message: 'Password must be at least 5 characters long.' },
                    { type: 'maxlength', message: 'Password must be at less than or equal to 10 characters long.' }
                ],
            };
        };
        this.login = function (form) {
            //alert(form);
            console.table(form);
            _this.goToDashboradPage();
        };
        this.goToRegisterPage = function () {
            _this.router.navigateByUrl('/registration');
        };
        this.goToDashboradPage = function () {
            _this.router.navigateByUrl('/dashboard');
        };
        this.goToForgotPasswordPage = function () {
            _this.router.navigateByUrl('/forgot');
        };
        this.createForm();
        this.setValidationMessages();
    }
    LoginPage.prototype.ngOnInit = function () {
    };
    LoginPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.page.html */ "./src/app/pages/login/login.page.html"),
            styles: [__webpack_require__(/*! ./login.page.scss */ "./src/app/pages/login/login.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]])
    ], LoginPage);
    return LoginPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-login-login-module.js.map