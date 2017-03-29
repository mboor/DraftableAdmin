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
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var http_1 = require('@angular/http');
var ng_bootstrap_1 = require('@ng-bootstrap/ng-bootstrap');
var app_component_1 = require('./app.component');
var players_component_1 = require('./components/players.component');
var player_component_1 = require('./components/player.component');
var login_component_1 = require('./components/login.component');
var app_routing_1 = require('./app.routing');
var player_resolver_1 = require('./resolvers/player.resolver');
var players_service_1 = require('./services/players.service');
var cookies_service_1 = require('angular2-cookie/services/cookies.service');
var auth_guard_service_1 = require('./services/auth-guard.service');
var ng2_bootstrap_modal_1 = require('ng2-bootstrap-modal');
var confirm_delete_component_1 = require('./components/confirm-delete.component');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, forms_1.FormsModule, http_1.HttpModule, app_routing_1.routing, ng_bootstrap_1.NgbModule.forRoot(), ng2_bootstrap_modal_1.BootstrapModalModule],
            declarations: [app_component_1.AppComponent, players_component_1.PlayersComponent, player_component_1.PlayerComponent, login_component_1.LoginComponent, confirm_delete_component_1.ConfirmDeleteComponent],
            bootstrap: [app_component_1.AppComponent],
            entryComponents: [confirm_delete_component_1.ConfirmDeleteComponent],
            providers: [players_service_1.PlayersService, player_resolver_1.PlayerResolver, cookies_service_1.CookieService, auth_guard_service_1.AuthGuard]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map