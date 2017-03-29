"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
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
var ng2_bootstrap_modal_1 = require('ng2-bootstrap-modal');
var players_service_1 = require('../services/players.service');
var ConfirmDeleteComponent = (function (_super) {
    __extends(ConfirmDeleteComponent, _super);
    function ConfirmDeleteComponent(dialogService, playerService) {
        _super.call(this, dialogService);
        this.playerService = playerService;
    }
    ConfirmDeleteComponent.prototype.confirm = function () {
        var _this = this;
        this.playerService.delete(this.playerId).subscribe(function (deletePlayer) {
            if (deletePlayer.delete_success) {
                _this.result = true;
                _this.close();
            }
        });
    };
    ConfirmDeleteComponent.prototype.cancel = function () {
        this.result = false;
        this.close();
    };
    ConfirmDeleteComponent = __decorate([
        core_1.Component({
            selector: 'confirmDelete',
            templateUrl: 'app/templates/confirm-delete.component.html'
        }), 
        __metadata('design:paramtypes', [ng2_bootstrap_modal_1.DialogService, players_service_1.PlayersService])
    ], ConfirmDeleteComponent);
    return ConfirmDeleteComponent;
}(ng2_bootstrap_modal_1.DialogComponent));
exports.ConfirmDeleteComponent = ConfirmDeleteComponent;
//# sourceMappingURL=confirm-delete.component.js.map