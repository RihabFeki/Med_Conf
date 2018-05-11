import {Component, OnInit} from '@angular/core';
import {Lot} from '../../../shared/models/lot';
import {Produit} from '../../../shared/models/produit';
import {Utils} from '../../../shared/utils';
import {ProduitService} from '../../../shared/services/produit.service';
import {LotService} from '../../../shared/services/lot.service';
import {Router} from '@angular/router';
import {Subscription} from 'rxjs/Subscription';

declare let swal: any;

@Component({
  selector: 'app-ajouter-lot',
  templateUrl: './ajouter-lot.component.html',
  styleUrls: ['./ajouter-lot.component.css']
})
export class AjouterLotComponent implements OnInit {
  selectedIndex: number = -1;
  lot: Lot = new Lot();
  produits: Produit[] = [];
  busy: Subscription;


  constructor(private router: Router,
              private lotService: LotService
    , private produitService: ProduitService) {
  }

  ngOnInit() {
    this.getAllProduits();
  }

  private getAllProduits() {
    this.busy = this.produitService.getProduits().subscribe(response => {
      this.produits = response as Array<Produit>;
    }, error => {
      console.log(error);
    });
  }

  addLot() {

    this.lot.produit_id = this.produits[this.selectedIndex].produit_id;
    this.busy = this.lotService.addLot(this.lot).subscribe(response => {
      swal({
        title: 'Succès',
        text: 'Lot ajoutée avec succées',
        confirmButtonColor: '#66BB6A',
        type: 'success',
        button: 'OK!',
      });
      this.router.navigate(['production/lot/list']);
    }, error => {
      console.log(error);
    });

  }
}
