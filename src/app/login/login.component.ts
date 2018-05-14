import {Component, OnInit} from '@angular/core';
import {AuthService} from "../shared/services/auth.service";
import {Credentials} from "../shared/models/credentials";
import {Subscription} from "rxjs/Subscription";
import {Router} from "@angular/router";
import {StorageService} from "../shared/services/storage.service";
import {Config} from "../shared/config";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  credentials: Credentials = new Credentials();
  busy: Subscription;

  constructor(private authService: AuthService, private router: Router,
              private stoarageService: StorageService) {


  }

  ngOnInit() {


  }

  loginUser() {
    this.busy = this.authService.login(this.credentials)
      .subscribe(
        (data: any) => {
          this.router.navigate(['/']);
          this.stoarageService.write(Config.keyAdminToken, "JWT " + data.token);
        },
        (error) => {

        }
      );
  }

}
