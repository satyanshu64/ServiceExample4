import { Component, OnInit } from '@angular/core';
import { HelloService } from "../../services/hello.service";
import { CustomersService } from "../../services/customers.service";
import { HttpErrorResponse } from "@angular/common/http";
import { Observable } from "rxjs/Observable";

@Component({
  selector: 'app-parallel',
  templateUrl: './parallel.component.html',
  styleUrls: ['./parallel.component.css']
})
export class ParallelComponent implements OnInit {    
  private result_one:any;
  private result_two:any;
  constructor(private _service_one:HelloService,
              private _service_two:CustomersService) { }

  ngOnInit() {
    Observable.forkJoin([this._service_one.getThinksterData(),
                          this._service_two.getCustomers()])
                .subscribe(res=>{
                  this.result_one=res[0];
                  this.result_two=res[1];
                },
              (err:HttpErrorResponse)=>{
              if (err.error instanceof Error){
                console.log("Client Side Error");
              }else{
                console.log("Server Side Error");
              }
              });
  }

}
