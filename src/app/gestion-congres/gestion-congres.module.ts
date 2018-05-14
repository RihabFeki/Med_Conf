import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { GestionCongresRouting } from './gestion-congres.routing';
import { ListeCongresComponent } from './liste-congres/liste-congres.component';
import { AjoutCongresComponent } from './ajout-congres/ajout-congres.component';

@NgModule({
  imports: [
    CommonModule,
    GestionCongresRouting,
    FormsModule
  ],
  declarations: [ListeCongresComponent, AjoutCongresComponent]
})
export class GestionCongresModule { }