import { Component } from '@angular/core';
import { ManagerService } from './services/manager.service';
import { Driver } from './models/driver';
import { Manager } from './models/manager';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'shahlavClient';
  constructor(public managerService: ManagerService) { }
  // func() {
  //   this.managerService.addManager(new Driver("rina")).subscribe(suc => {
  //     alert("sucess");
  //     console.log(suc);
  //   }, err => {
  //     alert("error");
  //     console.log(err);
  //   })
  // }

  // m:Manager=new Manager(10,"1122","pnina","menachem");

  // func(){
  //   this.managerService.GetManager().subscribe(suc=>{alert(this.managerService.GetManager())},err=>{
  //     alert("error")});
  // }

  // func1(){
  //   this.managerService.addManager(this.m).subscribe(suc=>{alert(this.managerService.addManager(this.m))},err=>{
  //     alert("error")});
  // }
}
