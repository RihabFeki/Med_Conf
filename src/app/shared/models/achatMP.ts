import {Unite} from "./unite";
import {MatierePremiere} from "./matiere-premiere";
import {OperationMP} from "./operationMP";
import {Fournisseur} from "./fournisseur";

export class AchatMP{
  achat_mp_id:number;
  operation_id:number;
  fournisseur_id: number;
  prix:number;
  operation:OperationMP;
  fournisseur:Fournisseur;
  deleted_at:Date;
  created_at:Date;
  updated_at:Date;
}
