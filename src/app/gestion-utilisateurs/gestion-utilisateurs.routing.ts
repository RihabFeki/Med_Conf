import { GestionUtilisateursModule } from './gestion-utilisateurs.module';
import { AjouterUtlilisateurComponent } from './ajouter-utlilisateur/ajouter-utlilisateur.component';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

// Layouts

export const routes: Routes = [
  {
    path: 'add',
    component: AjouterUtlilisateurComponent 
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GestionUtilisateursRouting {
}
