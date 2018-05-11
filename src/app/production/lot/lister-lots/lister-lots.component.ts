import {Component, OnInit} from '@angular/core';
import {Lot} from '../../../shared/models/lot';
import {Subscription} from 'rxjs/Subscription';
import {LotService} from '../../../shared/services/lot.service';
import {Router} from '@angular/router';
import {Utils} from '../../../shared/utils';

@Component({
  selector: 'app-lister-lots',
  templateUrl: './lister-lots.component.html',
  styleUrls: ['./lister-lots.component.css']
})
export class ListerLotsComponent implements OnInit {
  lots: Lot[] = [];
  busy: Subscription;

  constructor(private router: Router,
              private lotService: LotService) {
  }

  ngOnInit() {
    this.getAllLots();
  }

  private getAllLots() {
    this.busy = this.lotService.getAllLots().subscribe(response => {
      this.lots = response;
      Utils.initializeDataTables(20, 6, 'dataTable');
    }), error => {
      console.debug(error);
    };
  }
}
