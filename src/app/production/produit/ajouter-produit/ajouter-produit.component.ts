import {Component, OnInit} from '@angular/core';
import {Emballage} from '../../../shared/models/emballage';
import {Recipient} from '../../../shared/models/recipient';
import {RecipientService} from '../../../shared/services/recipient.service';
import {EmballageService} from '../../../shared/services/emballage.service';
import {Router} from '@angular/router';
import {Subscription} from 'rxjs/Subscription';
import {Produit} from '../../../shared/models/produit';
import {ProduitService} from '../../../shared/services/produit.service';

declare let swal: any;

@Component({
  selector: 'app-ajouter-produit',
  templateUrl: './ajouter-produit.component.html',
  styleUrls: ['./ajouter-produit.component.css']
})
export class AjouterProduitComponent implements OnInit {
  busy: Subscription;
  public emballages: Emballage[] = [];
  public recipients: Recipient[] = [];
  public produit: Produit = new Produit();
  public isEditAction: boolean;

  constructor(private router: Router, private emballageService: EmballageService
    , private produitService: ProduitService, private recipientService: RecipientService) {
    this.isEditAction = this.router.url.indexOf('edit') !== -1;

  }

  ngOnInit() {
    this.getAllEmballages();
    this.getAllRecipients();
  }

  private getAllEmballages() {
    let baseContext = this;
    this.busy = this.emballageService.getEmballages().subscribe(response => {
      baseContext.emballages = response;
    }), error => {
      console.debug(error);
    };
  }

  private getAllRecipients() {
    let baseContext = this;

    this.busy = this.recipientService.getRecipients().subscribe(response => {
      baseContext.recipients = response;
    }), error => {
      console.debug(error);

    };
  }

  private addProduit() {
    let baseContext = this;
    console.log(this.produit);
    this.busy = this.produitService.addProduit(this.produit).subscribe(response => {
      swal({
        title: 'Ajouté !',
        text: 'Un nouveau produit est ajouté.',
        confirmButtonColor: '#66BB6A',
        type: 'success'
      }).then((isConfirm) => {
        this.router.navigate(['/production/produit/list']);
      });
    }), error => {
      swal({
        title: 'Erreur !',
        text: JSON.stringify(error.error.errors),
        confirmButtonColor: 'red',
        type: 'error'
      });
      console.debug(error);
      console.debug(error);
    };
  }
}
