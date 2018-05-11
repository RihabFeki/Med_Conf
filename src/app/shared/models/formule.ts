import {Produit} from "./produit";
import {Unite} from "./unite";
import {MatierePremiere} from "./matiere-premiere";



export class Formule {
  public formule_id : number;
  public produit_id : number;
  public label : string;
  public produit : Produit;
  public formules_matieres_premieres : Formule_Matiere_Premiere[];
  public matieres_premieres : Formule_Matiere_Premiere[];
}

export class Formule_Matiere_Premiere {
  public id : number;
  public formule_id : number;
  public matiere_premiere_id : number;
  public unite_id : number;
  public quantite : number;

  public unite : Unite;
  public matiere_premiere : MatierePremiere;

}
