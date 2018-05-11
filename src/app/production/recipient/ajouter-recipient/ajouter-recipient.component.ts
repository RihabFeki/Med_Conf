import {Component, OnInit} from '@angular/core';
import {Recipient} from '../../../shared/models/recipient';
import {ActivatedRoute, Router} from '@angular/router';
import {Utils} from '../../../shared/utils';
import {Subscription} from 'rxjs/Subscription';
import {RecipientService} from '../../../shared/services/recipient.service';
import {UniteService} from '../../../shared/services/unite.service';
import {Unite} from '../../../shared/models/unite';

declare let swal: any;

@Component({
  selector: 'app-ajouter-recipient',
  templateUrl: './ajouter-recipient.component.html',
  styleUrls: ['./ajouter-recipient.component.css']
})
export class AjouterRecipientComponent implements OnInit {
  recipient: Recipient = null;
  public isEditAction: boolean;
  busy: Subscription;
  unites: Array<Unite>;

  constructor(private uniteService: UniteService,
              private recipientService: RecipientService,
              private activatedRoute: ActivatedRoute, private router: Router) {
    this.isEditAction = this.router.url.indexOf('edit') !== -1;
  }

  ngOnInit() {
    this.recipient = new Recipient();
    this.getAllUnits();
    if (this.isEditAction)
      this.initRecipient();
  }

  addRecipient() {
    let baseContext = this;

    this.busy = this.recipientService.addRecipient(this.recipient).subscribe(response => {

      baseContext.recipient = response as Recipient;
      swal({
        title: 'Ajouté !',
        text: 'Un nouveau récipient est ajouté.',
        confirmButtonColor: '#66BB6A',
        type: 'success'
      });
      this.router.navigate(['/production/recipient/list']);
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

  initRecipient() {
    let baseContext = this;
    this.activatedRoute.params.subscribe(
      params => {
        baseContext.recipient.recipient_id = +params['id'];
        this.busy = baseContext.busy = baseContext.recipientService.getRecipientDetails(
          baseContext.recipient.recipient_id).subscribe(data => {
            baseContext.recipient = data;
          }
        );
      }
    );

  }

  editRecipient() {

    let baseContext = this;

    console.debug(baseContext.recipient);
    this.busy = this.recipientService.editRecipient(this.recipient).subscribe(response => {

      // console.debug(baseContext.recipient);
      baseContext.recipient = response as Recipient;
      swal({
        title: 'Modifié !',
        text: 'Le récipient est modifé.',
        confirmButtonColor: '#66BB6A',
        type: 'success'
      }).then((isConfirm) => {
        baseContext.router.navigate(['/production/recipient/list']);
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

  getAllUnits() {
    this.uniteService.getAllUnits().subscribe(data => this.unites = data);
  }

  supprimerRecipient() {
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
      baseContext.busy = this.recipientService.deleteRecipient(this.recipient.recipient_id).subscribe(response => {

        // console.debug(baseContext.recipient);
        swal({
          title: 'Supprimé !',
          text: 'Le récipient est supprimé.',
          confirmButtonColor: '#66BB6A',
          type: 'success'
        }).then((isConfirm) => {
          baseContext.router.navigate(['/recipient/list']);
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
