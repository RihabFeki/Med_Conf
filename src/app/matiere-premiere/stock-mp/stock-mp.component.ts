import {Component, OnInit} from '@angular/core';
import {MatierePremiere} from "../../shared/models/matiere-premiere";
import {MPService} from "../../shared/services/mp.service";
import {UniteService} from "../../shared/services/unite.service";
import {Unite} from "../../shared/models/unite";

declare let jQuery: any;
declare let swal: any;

@Component({
  selector: 'app-stock-mp',
  templateUrl: './stock-mp.component.html',
  styleUrls: ['./stock-mp.component.css']
})
export class StockMpComponent implements OnInit {

  mp: Array<MatierePremiere>;
  mpName: string;
  units: Array<Unite>;
  selectedUnit: Unite;
  selectedMP: MatierePremiere;

  constructor(private mpService: MPService, private uniteService: UniteService) {
  }

  ngOnInit() {
    const base = this;
    this.getAllMP();
    this.getAllUnits();
    this.mpName = "";
  }

  public getAllMP() {
    this.mpService.getMP().subscribe(data => {
      this.mp = new Array<MatierePremiere>(0);
      this.mp = data;
    });
    setTimeout(function () {
        jQuery('#stockMP').DataTable();
      }, 500
    );
  }

  public getAllUnits() {
    this.uniteService.getAllUnits().subscribe(data => {
      this.units = data;
      this.selectedUnit = this.units[0];
    });
  }

  public cleanAddMPModal() {
    this.selectedUnit = this.units[0];
    this.mpName = "";
    jQuery('#add-mp-modal').modal('toggle');
  }

  public addMP() {
    this.mpService.addMP(this.mpName, this.selectedUnit.unite_id).subscribe(data => {
        this.mp.push(data);
        swal({
          title: "Succès",
          text: "La matiere premiere \""+data.nom+"\" a été ajoutée",
          confirmButtonColor: "#66BB6A",
          type:"success",
          button: "OK!",
        });
      },
      error => {
        swal({
          title: "Erreur",
          text: "L'operation a échoué",
          confirmButtonColor: "#FF0000",
          type:"warning",
          button: "OK!",
        });
      });
    this.cleanAddMPModal();
  }

  public selectMP(i: number) {
    this.selectedMP = this.mp[i];
  }


}
