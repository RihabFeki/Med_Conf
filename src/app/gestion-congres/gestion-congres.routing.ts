import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { ListeCongresComponent } from './liste-congres/liste-congres.component';
import { AjoutCongresComponent } from './ajout-congres/ajout-congres.component';

// Layouts

export const routes: Routes = [
  {
    path: 'list',
    component: ListeCongresComponent
  },
  {
    path: 'add',
    component: AjoutCongresComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GestionCongresRouting {
}
