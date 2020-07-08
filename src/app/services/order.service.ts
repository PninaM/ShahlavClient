import { Injectable } from '@angular/core';
import { Order } from '../models/order';
import{Customer} from '../models/customer.models'
import{UsersService} from '../services/users.service'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class OrderService {

 currentUser;
 curCustomerId;
 userOrders=new Array<Order>();

  constructor(currUser:UsersService) {
    this.currentUser=currUser.getCurrentUser();
   }

  //פונקציה שמחזירה הזמנות של משתמש
openOrdersbyUserId():Array<Order>{
 
  this.curCustomerId=Customer.CustomerArray.find(x=>x.UserName==this.currentUser['userName'])
this.userOrders.push(Order.ordersArray.find(x=>x.CustomerId==this.curCustomerId));
  
return this.userOrders;
}
  
}
