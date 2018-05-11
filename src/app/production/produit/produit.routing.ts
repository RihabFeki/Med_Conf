import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ListerEmballagesComponent} from "../emballage/lister-emballages/lister-emballages.component";
import {AjouterEmballageComponent} from "../emballage/ajouter-emballage/ajouter-emballage.component";
import {ListerProduitsComponent} from "./lister-produits/lister-produits.component";
import {AjouterProduitComponent} from "./ajouter-produit/ajouter-produit.component";

// Layouts


export const routes: Routes = [
  {
    path: 'list',
    component: ListerProduitsComponent
  },
  {
    path: 'ajouter',
    component: AjouterProduitComponent
  },{
    path: ':id',
    children: [{
      'path' : 'edit',
      component: AjouterProduitComponent
    }]
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProduitRouting {
}
