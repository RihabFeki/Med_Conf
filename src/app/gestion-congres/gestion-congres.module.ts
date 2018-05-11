import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { GestionCongresRouting } from './gestion-congres.routing';
import { ListeCongresComponent } from './liste-congres/liste-congres.component';

@NgModule({
  imports: [
    CommonModule,
    GestionCongresRouting,
    FormsModule
  ],
  declarations: [ListeCongresComponent]
})
export class GestionCongresModule { }