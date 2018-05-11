import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ListerLotsComponent} from "./lister-lots/lister-lots.component";
import {AjouterLotComponent} from "./ajouter-lot/ajouter-lot.component";

// Layouts

export const routes: Routes = [
  {
    path: 'list',
    component: ListerLotsComponent
  },
  {
    path: 'ajouter',
    component: AjouterLotComponent
  },{
    path: ':id',
    children: [{
      'path' : 'edit',
      component: AjouterLotComponent
    }]
  }
    /*canActivate: [
     CanActivateViaAuthGuard
     ]*/
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LotRouting {
}
