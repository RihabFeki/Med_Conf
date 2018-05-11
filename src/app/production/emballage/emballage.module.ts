import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ListerEmballagesComponent} from "./lister-emballages/lister-emballages.component";
import {AjouterEmballageComponent} from "./ajouter-emballage/ajouter-emballage.component";
import {SharedModule} from "../../shared/shared.module";
import {FormsModule} from "@angular/forms";
import {RecipientRouting} from "../recipient/recipient.routing";
import {EmballageRouting} from "./emballage.routing";
import {RouterModule} from "@angular/router";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    EmballageRouting,
    SharedModule,
    RouterModule

  ],
  declarations: [ListerEmballagesComponent,AjouterEmballageComponent]
})
export class EmballageModule { }
