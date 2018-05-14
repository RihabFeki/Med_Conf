import {  hotel } from './hotel';
import { utilisateurModel } from './utilisateur';
import { seance } from './seance';

export class Congres{
   titre:string;
   specialite:string;
   theme:string;
   date_debut_evenement:Date ;
   date_debut_soumission:Date;
   president:utilisateurModel;
   comite_scientifique:utilisateurModel[];
   comite_organisation:utilisateurModel[];
   seances:seance[];
   hotel: hotel=new hotel();
 
   
  }
  