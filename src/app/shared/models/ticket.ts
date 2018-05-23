import { contribution } from './contribution';
import { Congres } from './congres';
import { utilisateurModel } from './utilisateur';
export class ticket{
    type:string ;
    congres:Congres;
    envoyeur:utilisateurModel ;
    receveur:utilisateurModel;
    etat:string;
    contribution:contribution;

}