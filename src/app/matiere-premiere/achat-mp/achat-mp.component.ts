import { Component, OnInit } from '@angular/core';
import {MatierePremiere} from "../../shared/models/matiere-premiere";
import {MPService} from "../../shared/services/mp.service";
import {UniteService} from "../../shared/services/unite.service";
import {Unite} from "../../shared/models/unite";
import {AchatMPService} from "../../shared/services/achatmp.service";
import {AchatMP} from "../../shared/models/achatMP";
import {Utils} from "../../shared/utils";
declare let jQuery: any;
@Component({
  selector: 'app-achat-mp',
  templateUrl: './achat-mp.component.html',
  styleUrls: ['./achat-mp.component.css']
})
export class AchatMpComponent implements OnInit {
  achats: Array<AchatMP>;
  constructor(private achatMPService: AchatMPService) { }
  ngOnInit() {
    this.achatMPService.getAll().subscribe(data=>{
      this.achats=data;
      Utils.initializeDataTables(0,7,'stockMP');
    });
  }

}
