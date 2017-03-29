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
var confirm_delete_component_1 = require('./confirm-delete.component');
var ng2_bootstrap_modal_1 = require('ng2-bootstrap-modal');
var PlayerComponent = (function () {
    function PlayerComponent(route, service, router, dialogService) {
        this.route = route;
        this.service = service;
        this.router = router;
        this.dialogService = dialogService;
        if (route.snapshot.params['id']) {
            this.playerId = route.snapshot.params['id'];
            this.createPlayer = false;
            console.log('create player: ' + this.createPlayer);
        }
        else {
            this.createPlayer = true;
        }
    }
    PlayerComponent.prototype.ngOnInit = function () {
        if (this.playerId != null || this.playerId != undefined || this.playerId != '') {
            this.playerInfo = this.route.snapshot.data['player'];
            console.log(this.route.snapshot.data);
        }
    };
    PlayerComponent.prototype.editOrCreatePlayer = function () {
        var _this = this;
        if (!this.createPlayer) {
            this.getPlayerInfo = this.inputs.toArray();
            //this.getPlayerInfo.
            console.log(this.getPlayerInfo);
            var editPlayerInfo = { height: "", weight: "", position: "", rank: "" };
            //var editPlayerInfo: EditPlayer;
            this.getPlayerInfo.forEach(function (item) {
                var value = item.nativeElement.value;
                var id = item.nativeElement.id;
                console.log('value: ' + value + ', id: ' + id);
                if (id.includes('height')) {
                    editPlayerInfo.height = value;
                }
                else if (id.includes('weight')) {
                    editPlayerInfo.weight = value;
                }
                else if (id.includes('position')) {
                    editPlayerInfo.position = value;
                }
                else if (id.includes('rank')) {
                    editPlayerInfo.rank = value;
                }
            });
            //console.debug('createJsonObject: ' + this.createJsonObject(editPlayerInfo.height, editPlayerInfo.weight, editPlayerInfo.position, editPlayerInfo.rank));
            var jsonObj = this.createJsonObjectForEditPlayer(editPlayerInfo.height, editPlayerInfo.weight, editPlayerInfo.position, editPlayerInfo.rank);
            console.log(jsonObj);
            console.log(this.playerId);
            this.service.editPlayer(jsonObj, this.playerId).subscribe(function (editPlayer) {
                console.log(editPlayer);
                if (!editPlayer.error && !editPlayer.auth_failed) {
                    _this.router.navigate(['prospects']);
                }
                else if (editPlayer.auth_failed) {
                    _this.router.navigate(['/']);
                }
                else {
                    console.log(editPlayer);
                }
            });
        }
        else {
            this.getPlayerInfo = this.createProspectInputs.toArray();
            console.log(this.createProspectInputs);
            var createPlayerInfo = { fName: "", lName: "", school: "", height: "", weight: "", position: "", rank: "" };
            this.getPlayerInfo.forEach(function (item) {
                var value = item.nativeElement.value;
                var id = item.nativeElement.id;
                console.debug('value: ' + value + ', id: ' + id);
                if (id.includes('height')) {
                    createPlayerInfo.height = value;
                }
                else if (id.includes('weight')) {
                    createPlayerInfo.weight = value;
                }
                else if (id.includes('position')) {
                    createPlayerInfo.position = value;
                }
                else if (id.includes('rank')) {
                    createPlayerInfo.rank = value;
                }
                else if (id.includes('fName')) {
                    createPlayerInfo.fName = value;
                }
                else if (id.includes('lName')) {
                    createPlayerInfo.lName = value;
                }
                else if (id.includes('school')) {
                    createPlayerInfo.school = value;
                }
            });
            //console.debug('createJsonObject: ' + this.createJsonObject(editPlayerInfo.height, editPlayerInfo.weight, editPlayerInfo.position, editPlayerInfo.rank));
            var jsonObj = this.createJsonObjectForCreatePlayer(createPlayerInfo.fName, createPlayerInfo.lName, createPlayerInfo.school, createPlayerInfo.height, createPlayerInfo.weight, createPlayerInfo.position, createPlayerInfo.rank);
            console.debug(jsonObj);
            console.debug(this.playerId);
            this.service.createPlayer(jsonObj).subscribe(function (createPlayer) {
                console.log(createPlayer);
                if (!createPlayer.error && !createPlayer.auth_failed) {
                    _this.router.navigate(['prospects']);
                }
                else if (createPlayer.auth_failed) {
                    _this.router.navigate(['/']);
                }
                else {
                    console.log(createPlayer.error);
                }
            });
        }
    };
    PlayerComponent.prototype.createJsonObjectForEditPlayer = function (height, weight, position, rank) {
        var jsonObj = "{\n      \"firstName\": \"" + this.playerInfo.firstName + "\",\n      \"lastName\": \"" + this.playerInfo.lastName + "\",\n      \"height\": \"" + height + "\",\n      \"weight\": \"" + weight + "\",\n      \"school\": \"" + this.playerInfo.school + "\",\n      \"rank\": " + rank + ",\n      \"position\": \"" + position + "\"\n    }";
        return jsonObj;
    };
    PlayerComponent.prototype.createJsonObjectForCreatePlayer = function (fName, lName, school, height, weight, position, rank) {
        var jsonObj = "{\n      \"firstName\": \"" + fName + "\",\n      \"lastName\": \"" + lName + "\",\n      \"height\": \"" + height + "\",\n      \"weight\": \"" + weight + "\",\n      \"school\": \"" + school + "\",\n      \"rank\": " + rank + ",\n      \"position\": \"" + position + "\"\n    }";
        return jsonObj;
    };
    PlayerComponent.prototype.checkForEmptyString = function (string) {
        if (string == null || string == undefined) {
            return '';
        }
        else {
            return string;
        }
    };
    PlayerComponent.prototype.deletePlayerClick = function () {
        var _this = this;
        var playerName = this.playerInfo.firstName + ' ' + this.playerInfo.lastName;
        this.dialogService.addDialog(confirm_delete_component_1.ConfirmDeleteComponent, {
            title: 'Confirm Delete',
            message: 'Delete ' + playerName + '?',
            playerId: this.playerId
        }).subscribe(function (isConfirmed) {
            console.log('isConfirmed: ' + isConfirmed);
            if (isConfirmed) {
                _this.router.navigate(['prospects']);
            }
        });
    };
    __decorate([
        core_1.ViewChildren('height,weight,position,rank'), 
        __metadata('design:type', core_1.QueryList)
    ], PlayerComponent.prototype, "inputs", void 0);
    __decorate([
        core_1.ViewChildren('fName,lName,school,height,weight,position,rank'), 
        __metadata('design:type', core_1.QueryList)
    ], PlayerComponent.prototype, "createProspectInputs", void 0);
    PlayerComponent = __decorate([
        core_1.Component({
            selector: 'player',
            templateUrl: 'app/templates/player.component.html',
            providers: [players_service_1.PlayersService]
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, players_service_1.PlayersService, router_1.Router, ng2_bootstrap_modal_1.DialogService])
    ], PlayerComponent);
    return PlayerComponent;
}());
exports.PlayerComponent = PlayerComponent;
//# sourceMappingURL=player.component.js.map