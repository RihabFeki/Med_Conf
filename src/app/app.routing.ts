import { CreationCompteUserComponent } from './creation-compte-user/creation-compte-user.component';
import { LoginComponent } from './login/login.component';
import {NgModule, Component} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FullLayoutComponent} from './full-layout/full-layout.component';

// Layouts

export const routes: Routes = [
  {
    path: '',
    component: FullLayoutComponent,
    children: [
      {
        path: 'production',
        loadChildren: "./production/production.module#ProductionModule"
      },
      
      {
        path:'mp',
        loadChildren: "./matiere-premiere/matiere-premiere.module#MatierePremiereModule"
      },
      {
        path:'usr',
        loadChildren:"./gestion-utilisateurs/gestion-utilisateurs.module#GestionUtilisateursModule"
        
      },
      {
        path:'congres',
        loadChildren:"./gestion-congres/gestion-congres.module#GestionCongresModule"
        
      }
      ],
    /*canActivate: [
     CanActivateViaAuthGuard
     ]*/
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'nouveauCompte',
    component: CreationCompteUserComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
