import { congresService } from './../../shared/services/congres.service';

import { Component, OnInit } from '@angular/core';
import { Congres } from '../../shared/models/congres';
import { Subscription } from 'rxjs/Subscription';
import { Router } from '@angular/router';
import { getCurrentDebugContext } from '@angular/core/src/view/services';
import { getLocaleDateFormat } from '@angular/common';

@Component({
  selector: 'app-liste-congres',
  templateUrl: './liste-congres.component.html',
  styleUrls: ['./liste-congres.component.css']
})
export class ListeCongresComponent implements OnInit {
  congres: Congres[]=[];
  busy: Subscription;


   constructor(private congresService: congresService, private router: Router) {


  }

  ngOnInit() {

    this.getAllcongres();
  }
  getAllcongres() {

    this.busy = this.congresService.getAll().subscribe(data => {

      this.congres = data;
    });


  }

}
