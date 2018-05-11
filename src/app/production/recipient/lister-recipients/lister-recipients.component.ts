import { Component, OnInit } from '@angular/core';
import {Utils} from "../../../shared/utils";
import {Recipient} from "../../../shared/models/recipient";
import {Subscription} from "rxjs/Subscription";
import {RecipientService} from "../../../shared/services/recipient.service";
import {Router} from "@angular/router";
declare var jQuery;
declare let swal: any;

@Component({
  selector: 'app-lister-recipients',
  templateUrl: './lister-recipients.component.html',
  styleUrls: ['./lister-recipients.component.css']
})
export class ListerRecipientsComponent implements OnInit {
  recipients: Recipient[] = [];
  busy: Subscription;

  constructor(private recipientService : RecipientService,private router: Router) { }

  ngOnInit() {
    this.getAllRecipients();

  }

  private getAllRecipients() {
    this.busy = this.recipientService.getRecipients().subscribe(response => {
      this.recipients = response as Array<Recipient>;

      Utils.initializeDataTables(20, 5, "dataTable");


    }), error => {
      console.debug(error);
    };

  }
  private deleteRecipient(recipient_id,i){

    let baseContext = this;

    swal({
      title: "Attention !",
      text: "Êtes-vous sûrs de vouloir supprimer ce récipient définitivement ?",
      type: "warning",
      showCancelButton: true,
      confirmButtonColor: "#EF5350",
      confirmButtonText: "Oui, supprimer!",
      cancelButtonText: "Non, annuler.",
      closeOnConfirm: true,
      closeOnCancel: true
    }).then((isConfirm) => {
      baseContext.busy = this.recipientService.deleteRecipient(recipient_id).subscribe(response => {
        Utils.initializeDataTables(20, 5, "dataTable");

        swal({
          title: "Supprimé !",
          text: "Le récipient est supprimé.",
          confirmButtonColor: "#66BB6A",
          type: "success"
        }).then((isConfirm)=>{  baseContext.recipients.splice(i, 1);});
      }, error => {
        swal({
          title: "Erreur !",
          text: JSON.stringify(error.error.errors),
          confirmButtonColor: "red",
          type: "error"
        });
        console.debug(error);

      })
    });
  }
}
