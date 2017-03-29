"use strict";
var router_1 = require('@angular/router');
var player_component_1 = require('./components/player.component');
var players_component_1 = require('./components/players.component');
var player_resolver_1 = require('./resolvers/player.resolver');
var login_component_1 = require('./components/login.component');
var auth_guard_service_1 = require('./services/auth-guard.service');
var playerId;
var appRoutes = [
    {
        path: '',
        component: login_component_1.LoginComponent
    },
    {
        path: 'prospects',
        component: players_component_1.PlayersComponent,
        canActivate: [auth_guard_service_1.AuthGuard]
    },
    {
        path: 'prospect/:id',
        component: player_component_1.PlayerComponent,
        canActivate: [auth_guard_service_1.AuthGuard],
        resolve: {
            player: player_resolver_1.PlayerResolver
        }
    },
    {
        path: 'create',
        component: player_component_1.PlayerComponent,
        canActivate: [auth_guard_service_1.AuthGuard]
    }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map