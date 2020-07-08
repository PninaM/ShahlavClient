import { Component, OnInit, ViewChild } from '@angular/core';
import{CustomerService}from "../../services/customer.service";
import{Customer}from "../../models/customer";
import { DatePipe } from '@angular/common';
import{faAngleLeft} from'@fortawesome/free-solid-svg-icons';
import { Router, RouterOutlet } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';
import { OrderComponent } from '../order/order.component';
import { OrderService } from 'src/app/services/order.service';



@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  faAngleLeft= faAngleLeft;
  panelOpenState = false;
  step = 0;
  activatedRoute: any;
  orderPath:string;


  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }

 
  constructor(public customerService:CustomerService,public route:Router) {
  //  this.currentUser=this.userservice.getCurrentUser();
   }
  
   pipe = new DatePipe('en-US');
   now = Date.now();

  //  sidenavBar-stabilitz
  //  opened:boolean;
  //    toggleMenu(){
   
  //      this.opened = !this.opened;
  //    }


   c:Customer= new Customer(null,"22255","Sam","Fishman","Taldor","5","sam55@gmail.com","0365421","0527778120","Shaked 5 Ramat Gan",null,"Sam5","5050");
   user=[1,2,3,4]
   
   openOrders(){
     alert("open orders");
   }
  funcGet(){
    this.customerService.getCustomer().subscribe(suc=>{alert(this.customerService.getCustomer())},err=>{
      alert("error")});
  }

  funcAdd(){
    this.customerService.addCustomer(this.c).subscribe(suc=>{alert("hi")},err=>{
      alert("error")});
  }

  funcDelete(){
    this.customerService.deleteCustomer().subscribe(suc=>{alert(this.customerService.deleteCustomer())},err=>("error"));
  }

  funcUpdate(){
    this.customerService.updateCustomer(this.c).subscribe(suc=>{alert(this.customerService.updateCustomer(this.c))},err=>("error"));
  }



  ngOnInit() {
  }

}
