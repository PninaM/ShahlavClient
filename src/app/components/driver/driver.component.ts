import { Component, OnInit } from '@angular/core';
import {DriverService}from "../../services/driver.service";
import {Driver}from "../../models/driver.models";

@Component({
  selector: 'app-driver',
  templateUrl: './driver.component.html',
  styleUrls: ['./driver.component.css']
})
export class DriverComponent implements OnInit {

  constructor(public driverService:DriverService) { }

  d:Driver=new Driver(7,"222","Dan","Tal");

  funcGet(){
    this.driverService.getDriver().subscribe(suc=>{alert(this.driverService.getDriver())},err=>{
      alert("error")});
  }

  funcAdd(){
    this.driverService.addDriver(this.d).subscribe(suc=>{alert("hi")},err=>{
      alert("error")});
  }

  funcDelete(){
    this.driverService.deleteDriver().subscribe(suc=>{alert(this.driverService.deleteDriver())},err=>("error"));
  }

  funcUpdate(){
    this.driverService.updateDriver(this.d).subscribe(suc=>{alert(this.driverService.updateDriver(this.d))},err=>("error"));
  }

  ngOnInit() {
  }

}
