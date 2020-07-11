import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import {Driver} from '../models/driver.models'

@Injectable({
  providedIn: 'root'
})
export class DriverService {

  contoller="Driver/";
  constructor(public Http:HttpClient) { }


  getDriver(){
    return this.Http.get(environment.baseUrl+this.contoller+"Get?x=3");
  }

  addDriver(d:Driver)
  {
    return this.Http.post(environment.baseUrl+this.contoller+"Add",d);
  }

  deleteDriver(){
    return this.Http.delete(environment.baseUrl+this.contoller+"Delete?x=2");
  }

  updateDriver(d:Driver){
    return this.Http.post(environment.baseUrl+this.contoller+"Update",d);
  }




}
