import {Injectable} from "@angular/core";
import {Config} from "../config";
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import {GenericService} from "./generic.service";
import {Recipient} from "../models/recipient";

@Injectable()
export class RecipientService extends GenericService {

  constructor(private http: HttpClient) {
    super();
  }

  getRecipients(): Observable<Recipient[]> {
    const url = Config.baseUrl + "/recipient";
    return this.http.get<Recipient[]>(url);
  }
  addRecipient(recipient : Recipient): Observable<Recipient> {
    const url = Config.baseUrl + "/recipient/add";
    return this.http.post<Recipient>(url, recipient);
  }

  editRecipient(recipient: Recipient): Observable<Recipient>  {
    const url = Config.baseUrl + "/recipient/edit";
    return this.http.put<Recipient>(url, recipient);
  }

  deleteRecipient(recipient_id: number): Observable<Recipient> {
    const url = Config.baseUrl + "/recipient/"+recipient_id;
    return this.http.delete<Recipient>(url);
  }

  getRecipientDetails(recipient_id: number): Observable<Recipient> {
    const url = Config.baseUrl + "/recipient/"+recipient_id;
    return this.http.get<Recipient>(url);
  }
}
