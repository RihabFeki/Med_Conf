import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListerLotsComponent } from './lister-lots/lister-lots.component';
import { AjouterLotComponent } from './ajouter-lot/ajouter-lot.component';
import {SharedModule} from "../../shared/shared.module";
import {FormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import {LotRouting} from "./lot.routing";

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    RouterModule,
    LotRouting

  ],
  declarations: [ListerLotsComponent, AjouterLotComponent]
})
export class LotModule { }
