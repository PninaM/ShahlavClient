import { Component, OnInit, Input } from '@angular/core';
import{Order} from '../../models/order';
import { UsersService } from 'src/app/services/users.service';
import { OrderService } from 'src/app/services/order.service';
import{Router, ActivatedRoute}from '@angular/router'

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  currentUser;
  userOrders=new Array<Order>();
  orderFunc="";
  constructor(public orderService:OrderService, public route: Router, public activatedRoute: ActivatedRoute) { 

  }  

getOpenOrders(){
  alert('my open orders');
  this.userOrders=this.orderService.openOrdersbyUserId();
  console.log(this.userOrders);
}

getAllOrders(){
  alert('all orders');
}

  ngOnInit() {

  //this.activatedRoute.paramMap("")
  
    
    this.activatedRoute.params.subscribe(params=>{
      this.orderFunc=params['orderFunc'];
      if(this.orderFunc.match('openOrders'))
      this.getOpenOrders();
      if(this.orderFunc.match('allOrders'))
      this.getAllOrders();
      
    })
   
   
  }

}
