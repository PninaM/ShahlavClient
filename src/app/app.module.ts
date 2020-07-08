import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import {OrderComponent} from  './components/order/order.component';
import { ManagerComponent } from './components/manager/manager.component';
import { CustomerComponent } from './components/customer/customer.component';
import { ProviderComponent } from './components/provider/provider.component';
import { DriverComponent } from './components/driver/driver.component';
import { ManagerRegisterComponent } from './components/manager-register/manager-register.component';
import { CustomerRegisterComponent } from './components/customer-register/customer-register.component';
import { ProviderRegisterComponent } from './components/provider-register/provider-register.component';
import { DriverRegisterComponent } from './components/driver-register/driver-register.component';
import { OrderStateComponent } from './components/order-state/order-state.component';
import { DriverTaskComponent } from './components/driver-task/driver-task.component';
import { ProviderOrderComponent } from './components/provider-order/provider-order.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { CustomrInComponent } from './components/customr-in/customr-in.component';
import { OrderDetailsComponent } from './components/order-details/order-details.component';
import { CustDetailsComponent } from './components/cust-details/cust-details.component';
import { SubHomeComponent } from './components/sub-home/sub-home.component';
import { ErrorComponent } from './components/error/error.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material';
// import {MaterialModule} from './material'
// import {MatToolbar, MatToolbarRow, MatToolbarModule} from '@angular/material/toolbar'
// import{MatMenu,MatMenuItem, MatMenuModule}from '@angular/material/menu'


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    OrderComponent,
    ManagerComponent,
    CustomerComponent,
    ProviderComponent,
    DriverComponent,
    ManagerRegisterComponent,
    CustomerRegisterComponent,
    ProviderRegisterComponent,
    DriverRegisterComponent,
    OrderStateComponent,
    DriverTaskComponent,
    ProviderOrderComponent,
    LogInComponent,
    CustomrInComponent,
    OrderDetailsComponent,
    CustDetailsComponent,
    SubHomeComponent,
    ErrorComponent,

    // MatSlider
   
  ],
  imports: [
    MaterialModule,
    BrowserModule, AppRoutingModule,HttpClientModule,
    FormsModule,ReactiveFormsModule, BrowserAnimationsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent],

})
export class AppModule { }
