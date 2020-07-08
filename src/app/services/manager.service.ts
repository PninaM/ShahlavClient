import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Manager } from '../models/manager';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ManagerService {
thisController:string="Manager/"
  constructor(public Http :HttpClient) { }

  // getManager(id:number):Observable<Manager>{
  //   return this.Http.get(environment.baseUrl+this.thisController+"Get", id);
  // }  

  getManager(){
      return this.Http.get(environment.baseUrl+this.thisController+"Get?x=5");
  }
  addManager(m:Manager){
    return this.Http.post(environment.baseUrl+this.thisController+"Add",m);
  }

  //how to add parameter? didn't allow
  deleteManager(){
    return this.Http.delete(environment.baseUrl+this.thisController+"Delete?x=10");
  }

  updateManager(m:Manager){
    return this.Http.post(environment.baseUrl+this.thisController+"Update",m);
  }
}
