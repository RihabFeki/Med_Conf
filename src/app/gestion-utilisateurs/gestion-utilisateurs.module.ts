import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AjouterUtlilisateurComponent } from './ajouter-utlilisateur/ajouter-utlilisateur.component';
import { GestionUtilisateursRouting } from './gestion-utilisateurs.routing';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    GestionUtilisateursRouting,
    FormsModule
  ],
  declarations: [AjouterUtlilisateurComponent]
})
export class GestionUtilisateursModule { }
