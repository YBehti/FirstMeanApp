function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["auth-auth-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/login/login.component.html":
  /*!***************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/auth/login/login.component.html ***!
    \***************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAuthLoginLoginComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<mat-card>\n  <mat-spinner *ngIf=\"isLoading\"></mat-spinner>\n  <form *ngIf=\"!isLoading\" (submit)=\"onLogin(loginForm)\" #loginForm = \"ngForm\">\n    <mat-form-field>\n      <input\n        matInput\n        type=\"email\"\n        name=\"email\"\n        placeholder=\"Enter email\"\n        ngModel\n        #emailInput = \"ngModel\"\n        email\n        required\n\n      >\n      <mat-error *ngIf=\"emailInput.invalid\">Please enter valid email</mat-error>\n    </mat-form-field>\n    <mat-form-field>\n      <input\n        type=\"password\"\n        matInput\n        placeholder=\"Enter password\"\n        name=\"password\"\n        ngModel\n        required\n        #passwordInput=\"ngModel\">\n      <mat-error *ngIf=\"passwordInput.invalid\">Please enter valid content</mat-error>\n    </mat-form-field>\n    <button mat-raised-button color=\"warn\"  type=\"submit\">Login</button>\n  </form>\n\n\n  </mat-card>\n\n\n\n\n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/sign-up/sign-up.component.html":
  /*!*******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/auth/sign-up/sign-up.component.html ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAuthSignUpSignUpComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<mat-card>\n  <mat-spinner *ngIf=\"isLoading\"></mat-spinner>\n  <form *ngIf=\"!isLoading\" (submit)=\"onSignUp(SignUpForm)\" #SignUpForm = \"ngForm\">\n    <mat-form-field>\n      <input\n        matInput\n        type=\"email\"\n        name=\"email\"\n        placeholder=\"Enter email\"\n        ngModel\n        required\n        email\n        #emailInput = \"ngModel\"\n\n      >\n      <mat-error *ngIf=\"emailInput.invalid\">Please enter valid email</mat-error>\n    </mat-form-field>\n    <mat-form-field>\n      <input\n        type=\"password\"\n        matInput\n        placeholder=\"Enter password\"\n        name=\"password\"\n        ngModel\n        required\n        #passwordInput=\"ngModel\">\n      <mat-error *ngIf=\"passwordInput.invalid\">Please enter valid content</mat-error>\n    </mat-form-field>\n    <button mat-raised-button color=\"warn\"  type=\"submit\">Sign Up</button>\n  </form>\n\n\n  </mat-card>\n\n";
    /***/
  },

  /***/
  "./src/app/auth/auth-routing.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/auth/auth-routing.module.ts ***!
    \*********************************************/

  /*! exports provided: AuthRoutingModule */

  /***/
  function srcAppAuthAuthRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthRoutingModule", function () {
      return AuthRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./login/login.component */
    "./src/app/auth/login/login.component.ts");
    /* harmony import */


    var _sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./sign-up/sign-up.component */
    "./src/app/auth/sign-up/sign-up.component.ts");

    var routes = [{
      path: 'login',
      component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]
    }, {
      path: 'signUp',
      component: _sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_4__["SignUpComponent"]
    }];

    var AuthRoutingModule = function AuthRoutingModule() {
      _classCallCheck(this, AuthRoutingModule);
    };

    AuthRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AuthRoutingModule);
    /***/
  },

  /***/
  "./src/app/auth/auth.module.ts":
  /*!*************************************!*\
    !*** ./src/app/auth/auth.module.ts ***!
    \*************************************/

  /*! exports provided: AuthModule */

  /***/
  function srcAppAuthAuthModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthModule", function () {
      return AuthModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./login/login.component */
    "./src/app/auth/login/login.component.ts");
    /* harmony import */


    var _sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./sign-up/sign-up.component */
    "./src/app/auth/sign-up/sign-up.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_material_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../angular-material.module */
    "./src/app/angular-material.module.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _auth_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./auth-routing.module */
    "./src/app/auth/auth-routing.module.ts");

    var AuthModule = function AuthModule() {
      _classCallCheck(this, AuthModule);
    };

    AuthModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"], _sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_3__["SignUpComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _auth_routing_module__WEBPACK_IMPORTED_MODULE_7__["AuthRoutingModule"], _angular_material_module__WEBPACK_IMPORTED_MODULE_5__["AngularMaterialModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"]]
    })], AuthModule);
    /***/
  },

  /***/
  "./src/app/auth/login/login.component.css":
  /*!************************************************!*\
    !*** ./src/app/auth/login/login.component.css ***!
    \************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAuthLoginLoginComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "mat-form-field{\r\n  width:100%;\r\n}\r\n\r\nmat-spinner{\r\n  margin: auto;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aC9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsVUFBVTtBQUNaOztBQUVBO0VBQ0UsWUFBWTtBQUNkIiwiZmlsZSI6InNyYy9hcHAvYXV0aC9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWF0LWZvcm0tZmllbGR7XHJcbiAgd2lkdGg6MTAwJTtcclxufVxyXG5cclxubWF0LXNwaW5uZXJ7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG59XHJcbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/auth/login/login.component.ts":
  /*!***********************************************!*\
    !*** ./src/app/auth/login/login.component.ts ***!
    \***********************************************/

  /*! exports provided: LoginComponent */

  /***/
  function srcAppAuthLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return LoginComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../auth.service */
    "./src/app/auth/auth.service.ts");

    var LoginComponent =
    /*#__PURE__*/
    function () {
      function LoginComponent(authService) {
        _classCallCheck(this, LoginComponent);

        this.authService = authService;
        this.isLoading = false;
      }

      _createClass(LoginComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.authStatusSub = this.authService.getAuthStatusListener().subscribe(function (authStatus) {
            _this.isLoading = false;
            console.log(authStatus);
          });
        }
      }, {
        key: "onLogin",
        value: function onLogin(form) {
          this.isLoading = true;

          if (form.invalid) {
            return;
          }

          this.authService.login(form.value.email, form.value.password);
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.authStatusSub.unsubscribe();
        }
      }]);

      return LoginComponent;
    }();

    LoginComponent.ctorParameters = function () {
      return [{
        type: _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
      }];
    };

    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-login',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./login.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/login/login.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./login.component.css */
      "./src/app/auth/login/login.component.css")).default]
    })], LoginComponent);
    /***/
  },

  /***/
  "./src/app/auth/sign-up/sign-up.component.css":
  /*!****************************************************!*\
    !*** ./src/app/auth/sign-up/sign-up.component.css ***!
    \****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAuthSignUpSignUpComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "mat-form-field{\r\n  width:100%;\r\n}\r\n\r\nmat-spinner{\r\n  margin: auto;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aC9zaWduLXVwL3NpZ24tdXAuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFVBQVU7QUFDWjs7QUFFQTtFQUNFLFlBQVk7QUFDZCIsImZpbGUiOiJzcmMvYXBwL2F1dGgvc2lnbi11cC9zaWduLXVwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtZm9ybS1maWVsZHtcclxuICB3aWR0aDoxMDAlO1xyXG59XHJcblxyXG5tYXQtc3Bpbm5lcntcclxuICBtYXJnaW46IGF1dG87XHJcbn1cclxuIl19 */";
    /***/
  },

  /***/
  "./src/app/auth/sign-up/sign-up.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/auth/sign-up/sign-up.component.ts ***!
    \***************************************************/

  /*! exports provided: SignUpComponent */

  /***/
  function srcAppAuthSignUpSignUpComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SignUpComponent", function () {
      return SignUpComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../auth.service */
    "./src/app/auth/auth.service.ts");

    var SignUpComponent =
    /*#__PURE__*/
    function () {
      function SignUpComponent(authService) {
        _classCallCheck(this, SignUpComponent);

        this.authService = authService;
        this.isLoading = false;
      }

      _createClass(SignUpComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;

          this.authStatusSub = this.authService.getAuthStatusListener().subscribe(function (authStatus) {
            _this2.isLoading = false;
          });
        }
      }, {
        key: "onSignUp",
        value: function onSignUp(form) {
          this.isLoading = true;

          if (form.invalid) {
            return;
          }

          this.authService.createUser(form.value.email, form.value.password);
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.authStatusSub.unsubscribe();
        }
      }]);

      return SignUpComponent;
    }();

    SignUpComponent.ctorParameters = function () {
      return [{
        type: _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
      }];
    };

    SignUpComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-sign-up',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./sign-up.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/sign-up/sign-up.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./sign-up.component.css */
      "./src/app/auth/sign-up/sign-up.component.css")).default]
    })], SignUpComponent);
    /***/
  }
}]);
//# sourceMappingURL=auth-auth-module-es5.js.map