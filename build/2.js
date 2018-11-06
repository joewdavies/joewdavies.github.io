webpackJsonp([2],{

/***/ 272:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactPageModule", function() { return ContactPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contact__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_navbar_navbar_module__ = __webpack_require__(278);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ContactPageModule = /** @class */ (function () {
    function ContactPageModule() {
    }
    ContactPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__contact__["a" /* ContactPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__contact__["a" /* ContactPage */]),
                __WEBPACK_IMPORTED_MODULE_3__components_navbar_navbar_module__["a" /* NavbarModule */]
            ],
        })
    ], ContactPageModule);
    return ContactPageModule;
}());

//# sourceMappingURL=contact.module.js.map

/***/ }),

/***/ 278:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__navbar__ = __webpack_require__(279);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var NavbarModule = /** @class */ (function () {
    function NavbarModule() {
    }
    NavbarModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__navbar__["a" /* NavbarComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicModule */],
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__navbar__["a" /* NavbarComponent */]
            ]
        })
    ], NavbarModule);
    return NavbarModule;
}());

//# sourceMappingURL=navbar.module.js.map

/***/ }),

/***/ 279:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/**
 * Generated class for the NavbarComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var NavbarComponent = /** @class */ (function () {
    function NavbarComponent() {
    }
    NavbarComponent.prototype.ngOnInit = function () {
        this.title = this.text;
    };
    NavbarComponent.prototype.openLink = function (url) {
        var redirectWindow = window.open(url, '_blank');
        redirectWindow.location;
    };
    NavbarComponent.prototype.callNumber = function () {
        window.open("tel:" + "0034674140517");
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], NavbarComponent.prototype, "text", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], NavbarComponent.prototype, "showIcons", void 0);
    NavbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-navbar',template:/*ion-inline-start:"C:\Users\joedavies\Documents\Formacion\Angular\cv\src\components\navbar\navbar.html"*/'<ion-navbar color="dark">\n  <ion-buttons left>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n  </ion-buttons>\n  <ion-title>{{text}}</ion-title>\n  <div showWhen="core">\n    <ion-buttons right *ngIf="showIcons">\n      <button ion-button icon-only (click)=\'openLink("https://www.linkedin.com/in/joewdavies/")\' class="contactItem">\n        <ion-icon title="Linkedin" name="logo-linkedin" class="contactIcons" item-start></ion-icon>\n      </button>\n      <button ion-button icon-only (click)=\'openLink("https://www.github.com/joewdavies/")\' class="contactItem">\n        <ion-icon title="Github" name="logo-github" class="contactIcons" item-start></ion-icon>\n      </button>\n      <button ion-button icon-only (click)=\'openLink("https://www.twitter.com/joewdavies/")\' class="contactItem">\n        <ion-icon title="Twitter" name="logo-twitter" class="contactIcons" item-start></ion-icon>\n      </button>\n      <button ion-button icon-only (click)=\'openLink("https://www.instagram.com/joewdavies/")\' class="contactItem">\n        <ion-icon title="Instagram" name="logo-instagram" class="contactIcons" item-start></ion-icon>\n      </button>\n    </ion-buttons>\n  </div>\n'/*ion-inline-end:"C:\Users\joedavies\Documents\Formacion\Angular\cv\src\components\navbar\navbar.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], NavbarComponent);
    return NavbarComponent;
}());

//# sourceMappingURL=navbar.js.map

/***/ }),

/***/ 280:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ContactPage = /** @class */ (function () {
    function ContactPage(navCtrl) {
        this.navCtrl = navCtrl;
        this.email = "jwd101@gmail.com";
    }
    ContactPage.prototype.openLink = function (url) {
        var redirectWindow = window.open(url, '_blank');
        redirectWindow.location;
    };
    ContactPage.prototype.callNumber = function () {
        window.open("tel:" + "0034674140517");
    };
    ContactPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-contact',template:/*ion-inline-start:"C:\Users\joedavies\Documents\Formacion\Angular\cv\src\pages\contact\contact.html"*/'<ion-header>\n\n  <app-navbar text="Contact"></app-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="mainContainer">\n\n  <ion-grid fixed no-padding>\n\n    <ion-row>\n\n      <ion-col>\n\n        <ion-list>\n\n          <ion-list-header>Feel free to get in touch</ion-list-header>\n\n          <ion-item (onclick)="location.href = email" class="contactItem">\n\n            <ion-icon title="email" name="mail" class="contactIcons" item-start></ion-icon>\n\n            {{email}}\n\n          </ion-item>\n\n          <ion-item (click)=\'openLink("https://www.github.com/joewdavies/")\' class="contactItem">\n\n            <ion-icon title="Github" name="logo-github" class="contactIcons" item-start></ion-icon>\n\n            JoeWDavies\n\n          </ion-item>\n\n          <ion-item (click)=\'openLink("https://www.linkedin.com/in/joewdavies/")\' class="contactItem">\n\n            <ion-icon title="Linkedin" name="logo-linkedin" class="contactIcons" item-start></ion-icon>\n\n            JoeWDavies\n\n          </ion-item>\n\n          <ion-item (click)=\'openLink("https://www.twitter.com/joewdavies/")\' class="contactItem">\n\n            <ion-icon title="Twitter" name="logo-twitter" class="contactIcons" item-start></ion-icon>\n\n            @joewdavies\n\n          </ion-item>\n\n          <ion-item (click)=\'openLink("https://www.instagram.com/joewdavies/")\' class="contactItem">\n\n            <ion-icon title="Instagram" name="logo-instagram" class="contactIcons" item-start></ion-icon>\n\n            @joewdavies\n\n          </ion-item>\n\n          <ion-item (click)=\'callNumber()\' class="contactItem">\n\n            <ion-icon title="call" name="call" class="contactIcons" item-start></ion-icon>\n\n            +34 674140517\n\n          </ion-item>\n\n        </ion-list>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\joedavies\Documents\Formacion\Angular\cv\src\pages\contact\contact.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]])
    ], ContactPage);
    return ContactPage;
}());

//# sourceMappingURL=contact.js.map

/***/ })

});
//# sourceMappingURL=2.js.map