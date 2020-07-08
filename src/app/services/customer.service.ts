import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Customer } from '../models/customer.models';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  
  contoller="Customer/";
  constructor(public Http:HttpClient) { }


  getCustomer(){
    return this.Http.get(environment.baseUrl+this.contoller+"Get?x=15");
  }

  addCustomer(c:Customer)
  {
    return this.Http.post(environment.baseUrl+this.contoller+"Add",c);
  }

  deleteCustomer(){
    return this.Http.delete(environment.baseUrl+this.contoller+"Delete?x=15");
  }

  updateCustomer(c:Customer){
    return this.Http.post(environment.baseUrl+this.contoller+"Update",c);
  }
}
