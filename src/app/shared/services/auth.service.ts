import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Credentials} from "../models/credentials";
import {Config} from "../config";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class AuthService {

  constructor(private http: HttpClient) {
  }

  login(credentials: Credentials) {
    return this.http.post(Config.baseUrl + "/auth/sign_in", credentials);
  }

  isLoggedIn() {
    return false;
  }
}
