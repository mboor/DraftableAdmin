import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent }  from './app.component';
import { PlayersComponent } from './components/players.component';
import { PlayerComponent } from './components/player.component';
import { LoginComponent } from './components/login.component';
import { routing } from './app.routing';
import { PlayerResolver } from './resolvers/player.resolver';
import { PlayersService } from './services/players.service';
import { CookieService } from 'angular2-cookie/services/cookies.service';
import { AuthGuard } from './services/auth-guard.service';
import { BootstrapModalModule } from 'ng2-bootstrap-modal';
import { ConfirmDeleteComponent } from './components/confirm-delete.component';
@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpModule, routing, NgbModule.forRoot(), BootstrapModalModule ],
  declarations: [ AppComponent, PlayersComponent, PlayerComponent, LoginComponent, ConfirmDeleteComponent ],
  bootstrap:    [ AppComponent],
  entryComponents: [ ConfirmDeleteComponent ],
  providers: [ PlayersService, PlayerResolver, CookieService, AuthGuard ]
})
export class AppModule { }
