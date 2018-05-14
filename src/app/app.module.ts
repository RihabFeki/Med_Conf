
import { AuthService } from './shared/services/auth.service';

import { LoginComponent } from './login/login.component';
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {FullLayoutComponent} from './full-layout/full-layout.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CommonModule, HashLocationStrategy, LocationStrategy} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {AppRoutingModule} from './app.routing';
import {StorageService} from './shared/services/storage.service';
import {ProductionModule} from "./production/production.module";
import {HttpClientModule} from "@angular/common/http";
import {MatierePremiereModule} from "./matiere-premiere/matiere-premiere.module";
import {MPService} from "./shared/services/mp.service";
import {UniteService} from "./shared/services/unite.service";
import {AchatMPService} from "./shared/services/achatmp.service";
import {Fournisseur} from "./shared/models/fournisseur";
import {FournisseurService} from "./shared/services/Fournisseur.service";
import {LotService} from "./shared/services/lot.service";
import { GestionUtilisateursModule } from './gestion-utilisateurs/gestion-utilisateurs.module';
import {SharedModule} from "./shared/shared.module";
import { GestionCongresModule } from './gestion-congres/gestion-congres.module';
import { congresService } from './shared/services/congres.service';



@NgModule({
  declarations: [
    AppComponent,
    FullLayoutComponent,
    LoginComponent,


  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    FormsModule,
    AppRoutingModule,
    ProductionModule,
    HttpClientModule,
    MatierePremiereModule,
    GestionUtilisateursModule,
    SharedModule,
    GestionCongresModule
    
 
  ],
  providers: [
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy
    },
    StorageService,
    MPService,
    UniteService,
    AchatMPService,
    FournisseurService,
    LotService,
    AuthService,
    congresService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
