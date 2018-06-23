import { Injectable } from '@angular/core';
import { Http , Response } from "@angular/http";
import "rxjs/Rx";
import { Observable } from "rxjs/Observable";

@Injectable({
  providedIn: 'root'
})
export class HelloService {

  constructor(private _http:Http) { }
  public getThinksterData (){
    return this._http.get("https://test-routes.herokuapp.com/test/hello")
    .map((res:Response)=>{
      return res.json();})
    .catch(this._handleError);
  }
  public _handleError(err){
    console.error("Error Raised...!"+err);
    return Observable.throw(err||"Internal server error...!");
  }
}
