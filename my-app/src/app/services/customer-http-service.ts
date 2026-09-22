import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ICustomerType } from '../classes/ICustomerType';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerHttpService {
  private _url: string = "/datasets/customers.json";
  constructor(private _http: HttpClient) {}
  getCustomerList(): Observable<ICustomerType[]> {
    return this._http.get<ICustomerType[]>(this._url);
  }
}