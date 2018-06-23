import { Injectable } from '@angular/core';
import {Http, Response} from "@angular/http";
import "rxjs/Rx";
import { Observable } from "rxjs/Observable";

@Injectable({
  providedIn: 'root'
})
export class CustomersService {

  constructor(private _http:Http) { }
  public getCustomers(){
    return this._http.get("https://www.w3schools.com/angular/customers.php")
    .map((res:Response)=>{
      return res.json();})
    .catch(this._handleError);
  }
  public _handleError(err){
    console.error("Error Raised...!"+err);
    return Observable.throw(err||"Internal server error...!");
  }
}
