import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ListerEmballagesComponent} from './lister-emballages/lister-emballages.component';
import {AjouterEmballageComponent} from './ajouter-emballage/ajouter-emballage.component';

// Layouts

export const routes: Routes = [
  {
    path: 'list',
    component: ListerEmballagesComponent
  },
  {
    path: 'ajouter',
    component: AjouterEmballageComponent
  }, {
    path: ':id',
    children: [{
      'path': 'edit',
      component: AjouterEmballageComponent
    }]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmballageRouting {
}
