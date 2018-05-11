import { Component, OnInit } from '@angular/core';
import {Subscription} from "rxjs/Subscription";
import {Router} from "@angular/router";
import {EmballageService} from "../../../shared/services/emballage.service";
import {Emballage} from "../../../shared/models/emballage";
import {Utils} from "../../../shared/utils";
declare var jQuery;
declare let swal: any;

@Component({
  selector: 'app-lister-emballages',
  templateUrl: './lister-emballages.component.html',
  styleUrls: ['./lister-emballages.component.css']
})
export class ListerEmballagesComponent implements OnInit {

  emballages : Emballage[]= [];
  busy : Subscription;
  constructor(private emballageService : EmballageService,private router: Router) { }

  ngOnInit() {
    this.getAllEmballages();
  }

  private getAllEmballages() {
    this.busy = this.emballageService.getEmballages().subscribe(response => {
      this.emballages = response ;

      Utils.initializeDataTables(20, 4, "dataTable");


    }), error => {
      console.debug(error);
    };



  }
}
