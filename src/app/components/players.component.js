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
var PlayersComponent = (function () {
    function PlayersComponent(service, router, cookieService) {
        var _this = this;
        this.service = service;
        this.router = router;
        this.cookieService = cookieService;
        this.service.getPlayers().subscribe(function (players) {
            console.log(players);
            _this.players = players;
        });
    }
    PlayersComponent.prototype.createNewProspectClick = function () {
        this.router.navigate(['create']);
    };
    PlayersComponent.prototype.logoutClick = function () {
        this.cookieService.remove('AuthSession');
        this.router.navigate(['/']);
    };
    PlayersComponent = __decorate([
        core_1.Component({
            selector: 'players',
            templateUrl: 'app/templates/players.component.html',
            providers: [players_service_1.PlayersService]
        }), 
        __metadata('design:paramtypes', [players_service_1.PlayersService, router_1.Router, core_2.CookieService])
    ], PlayersComponent);
    return PlayersComponent;
}());
exports.PlayersComponent = PlayersComponent;
//# sourceMappingURL=players.component.js.map