import { Injectable } from '@angular/core';
import {Customer} from '../models/customer'

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
return this.currentUser;
}


}
