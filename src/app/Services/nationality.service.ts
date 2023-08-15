import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/Environments/Environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NationalityService {

  constructor(private _http: HttpClient) { }

  getNationalityList(): Observable<any> {
    return this._http.get(`${environment.APIURL}/Nationalities/AllNationalities`);
  }

}
