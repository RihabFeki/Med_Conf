import { Injectable } from '@angular/core';
import {GenericService} from "./generic.service";
import {HttpClient} from "@angular/common/http";
import {Config} from "../config";
import {Observable} from "rxjs/Observable";
import {Lot} from "../models/lot";

@Injectable()
export class LotService  extends GenericService{

  constructor(private http: HttpClient) {super(); }

  addLot(lot :Lot){
    const url = Config.baseUrl + "/lot/add";
    return this.http.post<Lot>(url,lot);
  }

  getAllLots() {
    const url = Config.baseUrl + "/lot";
    return this.http.get<Lot[]>(url);
  }
}
