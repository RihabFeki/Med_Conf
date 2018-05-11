import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { ListeCongresComponent } from './liste-congres/liste-congres.component';

// Layouts

export const routes: Routes = [
  {
    path: 'list',
    component: ListeCongresComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GestionCongresRouting {
}
