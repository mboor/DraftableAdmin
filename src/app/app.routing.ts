import { ModuleWithProviders } from '@angular/core';
import {Routes, RouterModule } from '@angular/router';

import { PlayerComponent } from './components/player.component';
import { PlayersComponent } from './components/players.component';
import { PlayerResolver } from './resolvers/player.resolver';
import { LoginComponent } from './components/login.component';
import { AuthGuard } from './services/auth-guard.service';

var playerId: string;
const appRoutes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'prospects',
    component: PlayersComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'prospect/:id',
    component: PlayerComponent,
    canActivate: [AuthGuard],
    resolve: {
      player: PlayerResolver
    }
  },
  {
    path: 'create',
    component: PlayerComponent,
    canActivate: [AuthGuard]
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
