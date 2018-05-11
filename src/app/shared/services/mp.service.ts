import {Injectable} from "@angular/core";
import {Config} from "../config";
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import {GenericService} from "./generic.service";
import {MatierePremiere} from "../models/matiere-premiere";

@Injectable()
export class MPService extends GenericService {
  url:string;
  constructor(private http: HttpClient) {
    super();
    this.url=Config.baseUrl+"/mp";
  }

  getMP(): Observable<Array<MatierePremiere>> {
    return <Observable<Array<MatierePremiere>>> this.http.get(this.url);
  }

  addMP(nom:string, unite_id:number):Observable<MatierePremiere>{
    return <Observable<MatierePremiere>> this.http.post(this.url+"/add",{nom:nom, unite_id:unite_id});
}

}
