import { Injectable } from '@angular/core';
import {Emballage} from "../models/emballage";
import {Observable} from "rxjs/Observable";
import {HttpClient} from "@angular/common/http";
import {Config} from "../config";
import {GenericService} from "./generic.service";

@Injectable()
export class EmballageService extends GenericService  {

  constructor(private http: HttpClient) {
    super();
  }

  getEmballages(): Observable<Emballage[]> {
    const url = Config.baseUrl + "/emballage";
    return this.http.get<Emballage[]>(url);
  }
  addEmballage(emballage : Emballage): Observable<Emballage> {
    const url = Config.baseUrl + "/emballage/add";
    return this.http.post<Emballage>(url, emballage);
  }

  editEmballage(emballage: Emballage): Observable<Emballage>  {
    const url = Config.baseUrl + "/emballage/edit";
    return this.http.put<Emballage>(url, emballage);
  }

  deleteEmballage(emballage_id: number): Observable<Emballage> {
    const url = Config.baseUrl + "/emballage/"+emballage_id;
    return this.http.delete<Emballage>(url);
  }

  getEmballageDetails(emballage_id: number): Observable<Emballage> {
    const url = Config.baseUrl + "/emballage/"+emballage_id;
    return this.http.get<Emballage>(url);
  }
}
