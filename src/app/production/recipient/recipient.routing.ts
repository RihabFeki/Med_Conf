import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ListerRecipientsComponent} from "./lister-recipients/lister-recipients.component";
import {AjouterRecipientComponent} from "./ajouter-recipient/ajouter-recipient.component";

// Layouts

export const routes: Routes = [
  {
    path: 'list',
    component: ListerRecipientsComponent
  },
  {
    path: 'ajouter',
    component: AjouterRecipientComponent
  },{
    path: ':id',
    children: [{
      'path' : 'edit',
      component: AjouterRecipientComponent
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
export class RecipientRouting {
}
