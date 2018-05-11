import {Component, OnInit} from '@angular/core';
import {Subscription} from 'rxjs/Subscription';
import {ActivatedRoute, Router} from '@angular/router';
import {Emballage} from '../../../shared/models/emballage';
import {EmballageService} from '../../../shared/services/emballage.service';

declare let swal: any;

@Component({
  selector: 'app-ajouter-emballage',
  templateUrl: './ajouter-emballage.component.html',
  styleUrls: ['./ajouter-emballage.component.css']
})
export class AjouterEmballageComponent implements OnInit {
  emballage: Emballage = null;
  public isEditAction: boolean;
  busy: Subscription;

  constructor(private emballageService: EmballageService, private activatedRoute: ActivatedRoute, private router: Router) {
    this.isEditAction = this.router.url.indexOf('edit') !== -1;
  }

//TODO incorporate l'unite
  ngOnInit() {
    this.emballage = new Emballage();
    if (this.isEditAction)
      this.initEmballage();
  }

  addEmballage() {
    let baseContext = this;

    this.busy = this.emballageService.addEmballage(this.emballage).subscribe(response => {

      baseContext.emballage = response as Emballage;
      swal({
        title: 'Ajouté !',
        text: 'Un nouveau emballage est ajouté.',
        confirmButtonColor: '#66BB6A',
        type: 'success'
      }).then((isConfirm) => {
        this.router.navigate(['/production/emballage/list']);
      });
    }, error => {
      swal({
        title: 'Erreur !',
        text: JSON.stringify(error.error.errors),
        confirmButtonColor: 'red',
        type: 'error'
      });
      console.debug(error);

    });
  }


  private initEmballage() {
    let baseContext = this;
    this.activatedRoute.params.subscribe(
      params => {
        baseContext.emballage.emballage_id = +params['id'];
        this.busy = baseContext.busy = baseContext.emballageService.getEmballageDetails(
          baseContext.emballage.emballage_id).subscribe(data => {
            baseContext.emballage = data;
          }
        );
      }
    );

  }

  editEmballage() {

    let baseContext = this;

    console.debug(baseContext.emballage);
    this.busy = this.emballageService.editEmballage(this.emballage).subscribe(response => {

      // console.debug(baseContext.recipient);
      baseContext.emballage = response as Emballage;
      swal({
        title: 'Modifié !',
        text: 'Le récipient est modifé.',
        confirmButtonColor: '#66BB6A',
        type: 'success'
      }).then((isConfirm) => {
        baseContext.router.navigate(['/production/emballage/list']);
      });
    }, error => {
      swal({
        title: 'Erreur !',
        text: JSON.stringify(error.error.errors),
        confirmButtonColor: 'red',
        type: 'error'
      });
      console.debug(error);

    });

  }

  supprimerEmballage() {
    let baseContext = this;
    // swal({
    //   title: "Êtes vous surs?",
    //   text: "Voulez vous vraiment supprimer le récipient?.",
    //   confirmButtonColor: "#66BB6A",
    //   type: "confirm"
    // });
    swal({
      title: 'Attention !',
      text: 'Êtes-vous sûrs de vouloir supprimer ce récipient définitivement ?',
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#EF5350',
      confirmButtonText: 'Oui, supprimer!',
      cancelButtonText: 'Non, annuler.',
      closeOnConfirm: true,
      closeOnCancel: true
    }).then((isConfirm) => {
      baseContext.busy = this.emballageService.deleteEmballage(this.emballage.emballage_id).subscribe(response => {

        // console.debug(baseContext.recipient);
        swal({
          title: 'Supprimé !',
          text: 'L\'emballage est supprimé.',
          confirmButtonColor: '#66BB6A',
          type: 'success'
        }).then((isConfirm) => {
          baseContext.router.navigate(['/emballage/list']);
        });
      }, error => {
        swal({
          title: 'Erreur !',
          text: JSON.stringify(error.error.errors),
          confirmButtonColor: 'red',
          type: 'error'
        });
        console.debug(error);

      });
    });
  }
}
