import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/Environments/Environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MasterDetailService {

  constructor(private _http: HttpClient) { }

  CreateRentCare(data:any): Observable<any> {
    return this._http.post<any>(`${environment.APIURL}/MasterDetails/CreateMasterDetail`, data);

  }
}
