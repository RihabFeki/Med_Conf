import { GenericService } from './generic.service';
import { StorageService } from './storage.service';
import { Congres } from './../models/congres';
import { Injectable } from "@angular/core";
import {Http} from '@angular/http';
import { HttpClient } from "@angular/common/http";
import { Config } from "../config";
import { Observable } from 'rxjs/Observable';



@Injectable()
export class congresService extends GenericService {
  

  constructor(private http: HttpClient ,private storageService:StorageService) {
    super();
  }
  

 getAll(): Observable<Congres[]>  {
   
    const headers = this.headers.set("Authorization", this.storageService.read(Config.keyAdminToken));
    const url = Config.baseUrl + '/congres';
    return this.http.get<Congres[]>(url,{headers:headers});
  }

  
}