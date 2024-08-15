import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ApiAccessRequestService {

  private apiUrl = 'http://192.168.46.187:8000/api/v1/tokens/create';

  constructor(private http: HttpClient) {
  }

  submitAccessRequest(formData: any): Observable<any> {
    return this.http.post(this.apiUrl, formData);
  }
}
