import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { utilisateurModel } from './../../shared/models/utilisateur';
import { Component} from '@angular/core';
import { AbstractControlDirective ,FormGroup , FormControl } from '@angular/forms';

@Component({
  selector: 'app-ajouter-utlilisateur',
  templateUrl: './ajouter-utlilisateur.component.html',
  styleUrls: ['./ajouter-utlilisateur.component.css']
})
export class AjouterUtlilisateurComponent  {
  user : utilisateurModel = new utilisateurModel() ;
  
  



  log(x,y,z,t) {console.log(x,y,z,t);}


  submit(){
    console.log(this.user);
  }

  

}
