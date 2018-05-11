import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProduitRouting} from "./produit.routing";
import {ListerProduitsComponent} from "./lister-produits/lister-produits.component";
import { AjouterProduitComponent } from './ajouter-produit/ajouter-produit.component';
import {SharedModule} from "../../shared/shared.module";

@NgModule({
  imports: [
    CommonModule,
    ProduitRouting,
    SharedModule

  ],
  declarations: [AjouterProduitComponent,    ListerProduitsComponent
  ]
})
export class ProduitModule { }
