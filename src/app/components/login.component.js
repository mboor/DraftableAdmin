"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var players_service_1 = require('../services/players.service');
var router_1 = require('@angular/router');
var core_2 = require('angular2-cookie/core');
var auth_guard_service_1 = require('../services/auth-guard.service');
var LoginComponent = (function () {
    function LoginComponent(route, service, router, cookieService, authGuard) {
        this.route = route;
        this.service = service;
        this.router = router;
        this.cookieService = cookieService;
        this.authGuard = authGuard;
    }
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.username = this.usernameInput.nativeElement.value;
        console.log(this.username);
        this.password = this.passwordInput.nativeElement.value;
        console.log(this.password);
        var jsonObj = {
            "username": this.username,
            "password": this.password
        };
        console.log('json login: ' + jsonObj);
        this.service.login(jsonObj).subscribe(function (authSession) {
            console.log(authSession);
            _this.auth = authSession.auth_failed;
            console.log(_this.auth);
            if (!_this.auth) {
                _this.authGuard.authenticated = true;
                _this.router.navigate(['prospects']);
            }
        });
    };
    __decorate([
        core_1.ViewChild('username'), 
        __metadata('design:type', core_1.ElementRef)
    ], LoginComponent.prototype, "usernameInput", void 0);
    __decorate([
        core_1.ViewChild('password'), 
        __metadata('design:type', core_1.ElementRef)
    ], LoginComponent.prototype, "passwordInput", void 0);
    LoginComponent = __decorate([
        core_1.Component({
            selector: 'login',
            templateUrl: 'app/templates/login.component.html',
            providers: [players_service_1.PlayersService]
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, players_service_1.PlayersService, router_1.Router, core_2.CookieService, auth_guard_service_1.AuthGuard])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map