import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/Environments/Environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BrandService {

  constructor(private _http: HttpClient) { }

  getBrandList(): Observable<any> {
    return this._http.get(`${environment.APIURL}/Brand/AllBrands`);
  }
  getBrandDetails(id: any): Observable<any> {
    return this._http.get(`${environment.APIURL}/Brand/${id}`);
  }
}
