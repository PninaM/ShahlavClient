import { Component, OnInit } from '@angular/core';
import { ManagerService } from 'src/app/services/manager.service';
import { Manager } from 'src/app/models/manager';

@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.css']
})
export class ManagerComponent implements OnInit {

  constructor(public managerService: ManagerService) { } 

  m:Manager=new Manager(10,"1122","pnina","menachem");

  funcGet(){
    this.managerService.getManager().subscribe(suc=>{alert(this.managerService.getManager())},err=>{
      alert("error")});
  }

  funcAdd(){
    this.managerService.addManager(this.m).subscribe(suc=>{alert("hi")},err=>{
      alert("error")});
  }

  funcDelete(){
    this.managerService.deleteManager().subscribe(suc=>{alert(this.managerService.deleteManager())},err=>("error"));
  }

  funcUpdate(){
    this.managerService.updateManager(this.m).subscribe(suc=>{alert(this.managerService.updateManager(this.m))},err=>("error"));
  }
  ngOnInit() {
  }

}
