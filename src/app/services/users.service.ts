import { Injectable } from '@angular/core';
import {Customer} from '../models/customer.models'

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  currentUser={
  }
  
  constructor() {
    this.currentUser

}

setCurrentUser(username:string, password:string){
  this.currentUser['userName']=username;
  this.currentUser['password']=password;


}

getCurrentUser(){
var x=5;
return this.currentUser;


}


}
