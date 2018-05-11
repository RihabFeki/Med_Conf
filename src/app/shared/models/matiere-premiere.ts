import {Unite} from "./unite";
import {Formule_Matiere_Premiere} from "./formule";
import {OperationMP} from "./operationMP";

export class MatierePremiere{
  matiere_premiere_id:number;
  nom:string;
  prix_moyen:number;
  quantite_dispo:number;
  unite_id:number;
  created_at:number;
  updated_at:number;
  deleted_at:number;
  unite:Unite;

  pivot: Formule_Matiere_Premiere;
  operations:OperationMP[];
}
