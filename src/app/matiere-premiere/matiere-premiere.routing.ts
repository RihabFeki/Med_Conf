import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MatierePremiereModule} from "./matiere-premiere.module";
import {StockMpComponent} from "./stock-mp/stock-mp.component";
import {AchatMpComponent} from "./achat-mp/achat-mp.component";
import {AjoutAchatMpComponent} from "./ajout-achat-mp/ajout-achat-mp.component";

// Layouts

export const routes: Routes = [
  {
    path: 'stock',
    component: StockMpComponent
  },{
    path: 'achat',
    component: AchatMpComponent
  },{
    path:'achat/add',
    component:AjoutAchatMpComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MatierePremiereRouting {
}
