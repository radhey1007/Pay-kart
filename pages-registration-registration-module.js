(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-registration-registration-module"],{

/***/ "./src/app/pages/registration/registration.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/registration/registration.module.ts ***!
  \***********************************************************/
/*! exports provided: RegistrationPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrationPageModule", function() { return RegistrationPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _registration_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./registration.page */ "./src/app/pages/registration/registration.page.ts");







var routes = [
    {
        path: '',
        component: _registration_page__WEBPACK_IMPORTED_MODULE_6__["RegistrationPage"]
    }
];
var RegistrationPageModule = /** @class */ (function () {
    function RegistrationPageModule() {
    }
    RegistrationPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_registration_page__WEBPACK_IMPORTED_MODULE_6__["RegistrationPage"]]
        })
    ], RegistrationPageModule);
    return RegistrationPageModule;
}());



/***/ }),

/***/ "./src/app/pages/registration/registration.page.html":
/*!***********************************************************!*\
  !*** ./src/app/pages/registration/registration.page.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar color=\"primary\">\r\n    <ion-title>Registration</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content color=\"secondary\" padding>\r\n\r\n  <form [formGroup]=\"registrationForm\" class=\"form\">\r\n    <ion-grid>\r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-item>\r\n            <ion-label position=\"floating\">Full Name</ion-label>\r\n            <ion-input type=\"text\" formControlName=\"name\" #name></ion-input>\r\n          </ion-item>\r\n          <div class=\"validation-errors\">\r\n            <ng-container *ngFor=\"let validation of validation_messages.name\">\r\n              <div class=\"error-message\"\r\n                *ngIf=\"registrationForm.get('name').hasError(validation.type) && (registrationForm.get('name').dirty || registrationForm.get('name').touched)\">\r\n                <ion-icon name=\"information-circle-outline\"></ion-icon> {{ validation.message }}\r\n              </div>\r\n            </ng-container>\r\n          </div>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-item>\r\n            <ion-label position=\"floating\">Email</ion-label>\r\n            <ion-input type=\"text\" formControlName=\"email\" #email></ion-input>\r\n          </ion-item>\r\n          <div class=\"validation-errors\">\r\n            <ng-container *ngFor=\"let validation of validation_messages.email\">\r\n              <div class=\"error-message\"\r\n                *ngIf=\"registrationForm.get('email').hasError(validation.type) && (registrationForm.get('email').dirty || registrationForm.get('email').touched)\">\r\n                <ion-icon name=\"information-circle-outline\"></ion-icon> {{ validation.message }}\r\n              </div>\r\n            </ng-container>\r\n          </div>\r\n        </ion-col>\r\n      </ion-row>\r\n\r\n      <ion-row>\r\n          <ion-col>\r\n            <ion-item>\r\n              <ion-label position=\"floating\">Gender</ion-label>\r\n              <ion-select formControlName=\"gender\" cancelText=\"Cancel\" okText=\"OK\">\r\n                  <ion-select-option *ngFor=\"let gender of genders\" [value]=\"gender\">{{gender}}</ion-select-option>\r\n              </ion-select>\r\n            </ion-item>\r\n            <div class=\"validation-errors\">\r\n              <ng-container *ngFor=\"let validation of validation_messages.gender\">\r\n                <div class=\"error-message\"\r\n                  *ngIf=\"registrationForm.get('gender').hasError(validation.type) && (registrationForm.get('gender').dirty || registrationForm.get('gender').touched)\">\r\n                  <ion-icon name=\"information-circle-outline\"></ion-icon> {{ validation.message }}\r\n                </div>\r\n              </ng-container>\r\n            </div>\r\n          </ion-col>\r\n        </ion-row>\r\n\r\n        <ion-row>\r\n          <ion-col>\r\n            <ion-item>\r\n              <ion-label position=\"floating\">D.O.B</ion-label>\r\n              <ion-input type=\"text\" formControlName=\"dob\" #dob></ion-input>\r\n          \r\n            </ion-item>\r\n            <div class=\"validation-errors\">\r\n              <ng-container *ngFor=\"let validation of validation_messages.dob\">\r\n                <div class=\"error-message\"\r\n                  *ngIf=\"registrationForm.get('dob').hasError(validation.type) && (registrationForm.get('dob').dirty || registrationForm.get('dob').touched)\">\r\n                  <ion-icon name=\"information-circle-outline\"></ion-icon> {{ validation.message }}\r\n                </div>\r\n              </ng-container>\r\n            </div>\r\n          </ion-col>\r\n          \r\n        </ion-row>\r\n\r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-item>\r\n            <ion-label position=\"floating\">Mobile No</ion-label>\r\n            <ion-input type=\"text\" formControlName=\"mobile\" #mobile></ion-input>\r\n          </ion-item>\r\n\r\n          <div class=\"validation-errors\">\r\n            <ng-container *ngFor=\"let validation of validation_messages.mobile\">\r\n              <div class=\"error-message\"\r\n                *ngIf=\"registrationForm.get('mobile').hasError(validation.type) && (registrationForm.get('mobile').dirty || registrationForm.get('mobile').touched)\">\r\n                <ion-icon name=\"information-circle-outline\"></ion-icon> {{ validation.message }}\r\n              </div>\r\n            </ng-container>\r\n          </div>\r\n        </ion-col>\r\n\r\n      </ion-row>\r\n\r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-item>\r\n            <ion-label position=\"floating\">Password</ion-label>\r\n            <ion-input type=\"text\" formControlName=\"password\" #password></ion-input>\r\n          </ion-item>\r\n          <div class=\"validation-errors\">\r\n            <ng-container *ngFor=\"let validation of validation_messages.password\">\r\n              <div class=\"error-message\"\r\n                *ngIf=\"registrationForm.get('password').hasError(validation.type) && (registrationForm.get('password').dirty || registrationForm.get('password').touched)\">\r\n                <ion-icon name=\"information-circle-outline\"></ion-icon> {{ validation.message }}\r\n              </div>\r\n            </ng-container>\r\n          </div>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n\r\n    <ion-row>\r\n        <ion-col>\r\n          <ion-button button color=\"dark\" (click)=\"register(registrationForm.value)\" expand=\"block\"  [disabled]=\"!registrationForm.valid\" fill=\"outline\">\r\n              Register\r\n            <ion-icon slot=\"end\" name=\"create\"></ion-icon>\r\n          </ion-button>\r\n        </ion-col>\r\n      </ion-row>\r\n        <ion-row>\r\n        <ion-col>\r\n          <ion-button button color=\"dark\" (click)=\"goToLoginPage()\" expand=\"block\" fill=\"outline\">\r\n              Have an account?  Sign In\r\n            <ion-icon slot=\"end\" name=\"create\"></ion-icon>\r\n          </ion-button>\r\n        </ion-col>\r\n      </ion-row>\r\n  </form>\r\n</ion-content>\r\n<ion-footer class=\"login-footer\" >\r\n  <ion-toolbar color=\"dark\">\r\n    <ion-title> <a href=\"javascript:void(0)\"><span class=\"rightHelp\"><ion-icon name=\"help-circle\"></ion-icon></span></a></ion-title>\r\n  </ion-toolbar>\r\n</ion-footer>"

/***/ }),

/***/ "./src/app/pages/registration/registration.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/pages/registration/registration.page.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".error-message {\n  color: red;\n  font-size: 14px;\n  margin-left: 10px;\n  margin-top: 10px; }\n\n.submit-btn {\n  margin-top: 40px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcmVnaXN0cmF0aW9uL0Q6XFxSX05fRFxcUGF5LWthcnQvc3JjXFxhcHBcXHBhZ2VzXFxyZWdpc3RyYXRpb25cXHJlZ2lzdHJhdGlvbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFRSxVQUFVO0VBQ1YsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixnQkFBZ0IsRUFBQTs7QUFFbEI7RUFDSSxnQkFBZ0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3JlZ2lzdHJhdGlvbi9yZWdpc3RyYXRpb24ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmVycm9yLW1lc3NhZ2Vcclxue1xyXG4gIGNvbG9yOiByZWQ7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbn1cclxuLnN1Ym1pdC1idG4ge1xyXG4gICAgbWFyZ2luLXRvcDogNDBweDtcclxuICB9XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/pages/registration/registration.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/registration/registration.page.ts ***!
  \*********************************************************/
/*! exports provided: RegistrationPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrationPage", function() { return RegistrationPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");





var RegistrationPage = /** @class */ (function () {
    function RegistrationPage(router, formBuilder, modalCtrl) {
        var _this = this;
        this.router = router;
        this.formBuilder = formBuilder;
        this.modalCtrl = modalCtrl;
        this.validation_messages = {};
        this.genders = [
            'Male',
            'Female',
            'Others',
        ];
        this.createForm = function () {
            _this.registrationForm = _this.formBuilder.group({
                name: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern('[a-zA-Z ]*')
                ])),
                email: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
                ])),
                gender: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
                dob: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
                mobile: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(10),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(10)
                ])),
                password: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(5),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(10)
                ]))
            });
        };
        this.setValidationMessages = function () {
            _this.validation_messages = {
                'name': [
                    { type: 'required', message: 'Full Name is required.' },
                    { type: 'pattern', message: 'Please enter a valid full name.' }
                ],
                'email': [
                    { type: 'required', message: 'Email is required.' },
                    { type: 'pattern', message: 'Please enter a valid email.' }
                ],
                'gender': [
                    { type: 'required', message: 'Please select your gender.' }
                ],
                'dob': [
                    { type: 'required', message: 'Please select your D.O.B.' }
                ],
                'mobile': [
                    { type: 'required', message: 'Mobile is required.' },
                    { type: 'minlength', message: 'Mobile num must be 10 digit.' },
                    { type: 'maxlength', message: 'Mobile num must be 10 digit.' }
                ],
                'password': [
                    { type: 'required', message: 'Password is required.' },
                    { type: 'minlength', message: 'Password must be at least 5 characters long.' },
                    { type: 'maxlength', message: 'Password must be at less than or equal to 10 characters long.' }
                ]
            };
        };
        this.register = function (form) {
            alert('test');
            console.table(form);
        };
        this.goToLoginPage = function () {
            _this.router.navigateByUrl('login');
        };
        this.createForm();
        this.setValidationMessages();
    }
    RegistrationPage.prototype.ngOnInit = function () {
    };
    RegistrationPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-registration',
            template: __webpack_require__(/*! ./registration.page.html */ "./src/app/pages/registration/registration.page.html"),
            styles: [__webpack_require__(/*! ./registration.page.scss */ "./src/app/pages/registration/registration.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]])
    ], RegistrationPage);
    return RegistrationPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-registration-registration-module.js.map