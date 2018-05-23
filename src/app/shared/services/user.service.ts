import {utilisateurModel } from './../models/utilisateur';
import {Injectable} from "@angular/core";
import { GenericService } from './generic.service';
import { HttpClient } from '@angular/common/http';
import { StorageService } from './storage.service';
import { Config } from '../config';

@Injectable()
export class userService extends GenericService {
  

    constructor(private http: HttpClient ,private storageService:StorageService) {
      super();
    }
    
   add(utilisateurModel:utilisateurModel){
    const headers = this.headers.set("Authorization", this.storageService.read(Config.keyAdminToken));
    const url= Config.baseUrl + "/auth/register";
    return this.http.post(url, utilisateurModel);
       
   }
      



}