import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/Environments/Environments/environment';
import { SearchCarModel } from '../Models/SearchCar.model';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  constructor(private _http: HttpClient) { }

  getCarList(): Observable<any> {
    return this._http.get(`${environment.APIURL}/Cars/AllCars`);
  }
  getCarListByBrandId(brandId:any): Observable<any> {
    return this._http.get(`${environment.APIURL}/Cars/AllCarsByBrandId?BrandId=${brandId}`);
  }
  SearchCarList(BrandName:string,ModelName:string,ModelYear:string): Observable<any> {
    return this._http.get(`${environment.APIURL}/Cars/SearchCar?BrandName=${BrandName}&ModelName=${ModelName}&ModelYear=${ModelYear}`);
  }
}
