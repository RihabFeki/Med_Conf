import { ticket } from './ticket';
import { contribution } from './contribution';
import { adresse } from './adresse';
export class utilisateurModel  {
 
    prenom:string;
    nom:string 
    cin:string
    telephone:number;
    active: boolean;
    admin: boolean;
    email:string;
    hash_password:string;
    created:Date;
    specialite:string;
    adresse: adresse = new adresse();
    contributions :contribution=new contribution();
    requetes:ticket=new ticket();

  }