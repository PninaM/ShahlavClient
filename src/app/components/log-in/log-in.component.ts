import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ManagerService } from 'src/app/services/manager.service';
import {Manager}from '../../models/manager.models';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { UsersService } from 'src/app/services/users.service';



@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {
  username:string="";
  password:string="";
  // id:string="";
  tUser="hip";
  manager:Manager;
  constructor(private route: Router, private activatedRoute: ActivatedRoute, private managerService:ManagerService, public userservice:UsersService) {
    
   }
   
onSubmit(){
  // מקור הניתוב
  // this.tUser=this.activatedRoute.snapshot.paramMap.get('tUser'); 
  // this.route.navigate(['']);
  this.userservice.setCurrentUser(this.username,this.password);
  if(this.tUser.match('m'))
  this.route.navigate(['home/manager']);
  if(this.tUser.match('p'))
  this.route.navigate(['home/provider']);
  if(this.tUser.match('c'))
  this.route.navigate(['home/customer']);
  if(this.tUser.match('d'))
  this.route.navigate(['home/driver']);
// if(this.username==""|| this.password==""|| this.Id==-1)
// {
//   alert("נא למלא תז שם משתמש וסיסמא");
  
// }
// else{
  // if(this.tUser=='m')
  // {
  //   this.route.navigate["home/manager"];
      // this.managerService.getManager(this.Id).subscribe(x=>this.manager=x);
      // if(this.manager!=null)
      // {
      //   if(this.username==this.manager.UserName &&this.password==this.manager.Password)
      //   this.route.navigate["/manager"];
      // }
  // }
// }
    
   }
  
  ngOnInit() {

  
    this.activatedRoute.params.subscribe(params=>{
      // this.tUser=this.activatedRoute.snapshot.routeConfig.path.split('/')[2];
      this.tUser=params['tUser'];
      console.log(this.tUser);
    
  
    })
  
  }

}



