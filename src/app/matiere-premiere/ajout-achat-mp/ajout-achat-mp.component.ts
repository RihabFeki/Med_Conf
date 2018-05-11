import { Component, OnInit } from '@angular/core';
import {MatierePremiere} from "../../shared/models/matiere-premiere";
import {MPService} from "../../shared/services/mp.service";
import {UniteService} from "../../shared/services/unite.service";
import {Unite} from "../../shared/models/unite";
import {AchatMPService} from "../../shared/services/achatmp.service";
import {AchatMP} from "../../shared/models/achatMP";
import {Fournisseur} from "../../shared/models/fournisseur";
import {FournisseurService} from "../../shared/services/Fournisseur.service";
declare let jQuery: any;
declare let swal:any;
@Component({
  selector: 'app-achat-mp',
  templateUrl: './ajout-achat-mp.component.html',
  styleUrls: ['./ajout-achat-mp.component.css']
})
export class AjoutAchatMpComponent implements OnInit {
  mp: Array<MatierePremiere>;
  units:Array<Unite>;
  fournisseurs: Array<Fournisseur>;
  selectedMP:MatierePremiere;
  selectedUnit:Unite;
  selectedFournisseur:Fournisseur;
  quantite:number;
  prix:number;
  date:Date;
  selectedUnitMP:Unite;
  mpName:string;
  fournisseurName: string;

  constructor(private achatMPService: AchatMPService, private mpService: MPService, private uniteService: UniteService, private fournisseurService: FournisseurService) { }
  ngOnInit() {
    this.mpName="";
    this.fournisseurName="";
    this.mpService.getMP().subscribe(data=> {
      this.mp=data;
      if (data.length) this.selectedMP= data[0];
    });
    this.uniteService.getAllUnits().subscribe(data=>{
      this.units=data;
      if (data.length) this.selectedUnit= data[0];
      if (data.length) this.selectedUnitMP= data[0];
    });
    this.fournisseurService.getAll().subscribe(data=>{
      this.fournisseurs=data;
      if (data.length) this.selectedFournisseur= data[0];
    });
  }

  add(){
    this.achatMPService.add(this.selectedUnit,this.date,this.quantite,this.selectedFournisseur,this.selectedMP,this.prix).subscribe(data=>{
      swal({
        title: "Succès",
        text: "L'achat a été enregistré",
        confirmButtonColor: "#66BB6A",
        type:"success",
        button: "OK!",
      });
    });
    this.selectedMP=this.mp[0];
    this.quantite=undefined;
    this.selectedUnit=this.units[0];
    this.prix=undefined;
    this.date=undefined;
    this.selectedFournisseur=this.fournisseurs[0];
  }
  cleanAddMPModal(){
    if (this.units && this.units.length>0)this.selectedUnit = this.units[0];
    this.mpName="";
    jQuery('#add-mp-modal').modal('toggle');
  }

  addMP(){
    this.mpService.addMP(this.mpName,this.selectedUnit.unite_id).subscribe(data => {
      this.mp.push(data);
      swal({
        title: "Succès",
        text: "La matiere premiere \""+data.nom+"\" a été ajoutée",
        confirmButtonColor: "#66BB6A",
        type:"success",
        button: "OK!",
      });
    });
    this.cleanAddMPModal();
  }

  cleanAddFournisseurModal(){
    this.fournisseurName="";
    jQuery('#add-fournisseur-modal').modal('toggle');
  }

  addFournisseur(){
    this.fournisseurService.add(this.fournisseurName).subscribe(data => {
      this.fournisseurs.push(data);
      swal({
        title: "Succès",
        text: "Le fournisseur \""+data.nom+"\" a été ajoutée",
        confirmButtonColor: "#66BB6A",
        type:"success",
        button: "OK!",
      });
    });
    this.cleanAddMPModal();
  }

}
