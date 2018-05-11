import {Unite} from "./unite";
import {MatierePremiere} from "./matiere-premiere";
import {OperationMP} from "./operationMP";
import {Fournisseur} from "./fournisseur";

export class ConsommationMP{
  consommation_mp_id:number;
  operation_id:number;
  operation:OperationMP;
  deleted_at:Date;
  created_at:Date;
  updated_at:Date;
}
