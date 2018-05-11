import {Recipient} from './recipient';
import {Emballage} from './emballage';
import {Formule} from './formule';

class Produit_Stock {
  public produit_stock_id: number;
  public quantite_disponible: number;
  public quantite_physique: number;
}

export class Produit {
  public produit_id: number;
  public label: string;
  public reference: string;
  public codeABarre: string;
  public emballage_id: number;
  public recipient_id: number;
  public prix: number;

  public recipient: Recipient;
  public emballage: Emballage;
  public produit_stock: Produit_Stock;
  public formules: Formule[];

  public created_at: Date;
  public deleted_at: Date;
  public updated_at: Date;
}
