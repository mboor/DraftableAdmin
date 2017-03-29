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
var http_1 = require('@angular/http');
require('rxjs/add/operator/map');
var auth_guard_service_1 = require('./auth-guard.service');
var PlayersService = (function () {
    function PlayersService(http, authGuard) {
        this.http = http;
        this.authGuard = authGuard;
        console.log('Players Service Initialized...');
    }
    //Get All Players
    PlayersService.prototype.getPlayers = function () {
        return this.http.get('http://localhost:3030/api/players/')
            .map(function (res) { return res.json(); });
    };
    //Get Single Players
    PlayersService.prototype.getPlayer = function (playerId) {
        var request = 'http://localhost:3030/api/players/' + playerId;
        return this.http.get(request)
            .map(function (res) { return res.json(); });
    };
    //Edit Player
    PlayersService.prototype.editPlayer = function (jsonObj, playerId) {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        //headers.append('withCredentials', 'true');
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.put('http://localhost:3030/api/players/' + playerId, jsonObj, { withCredentials: true,
            headers: new http_1.Headers({ 'Content-Type': 'application/json' }) })
            .map(function (res) { return res.json(); });
    };
    //Create Player
    PlayersService.prototype.createPlayer = function (jsonObj) {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:3030/api/players', jsonObj, { withCredentials: true, headers: headers })
            .map(function (res) { return res.json(); });
    };
    //Login
    PlayersService.prototype.login = function (jsonObj) {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        //headers.append('Content-Type', 'application/x-www-form-urlencoded');
        //headers.append('withCredentials', 'true');
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.put('http://localhost:3030/api/login', jsonObj, { withCredentials: true,
            headers: new http_1.Headers({ 'Content-Type': 'application/json' }) })
            .map(function (res) { return res.json(); });
    };
    //Delete Player
    PlayersService.prototype.delete = function (playerId) {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.delete('http://localhost:3030/api/players/delete/' + playerId, { withCredentials: true, headers: headers })
            .map(function (res) { return res.json(); });
    };
    PlayersService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http, auth_guard_service_1.AuthGuard])
    ], PlayersService);
    return PlayersService;
}());
exports.PlayersService = PlayersService;
//# sourceMappingURL=players.service.js.map