import {userService} from './../shared/services/user.service';
import {adresse} from './../shared/models/adresse';

import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {utilisateurModel} from '../shared/models/utilisateur';

import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-creation-compte-user',
  templateUrl: './creation-compte-user.component.html',
  styleUrls: ['./creation-compte-user.component.css']
})
export class CreationCompteUserComponent implements OnInit {
  user: utilisateurModel = new utilisateurModel();
  busy: Subscription;


  constructor(private userService: userService, private router: Router) {
  }

  ngOnInit() {

  }

  addUser() {
    console.log(this.user);
    this.busy = this.userService.add(this.user).subscribe(
      (data) => {
        console.log(data);
        this.router.navigate(['/']);
      },
      error => {
        console.log(error);

      });
  }

  seConnecter() {
    this.router.navigate(['/login']);


  }
}
