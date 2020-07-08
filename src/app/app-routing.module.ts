import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import {OrderComponent} from './components/order/order.component';
import {ManagerRegisterComponent} from './components/manager-register/manager-register.component';
import {DriverRegisterComponent} from './components/driver-register/driver-register.component';
import {ProviderRegisterComponent} from './components/provider-register/provider-register.component';
import {CustomerRegisterComponent} from './components/customer-register/customer-register.component';
import {CustomerComponent} from './components/customer/customer.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { CustomrInComponent } from './components/customr-in/customr-in.component';
import { CustDetailsComponent } from './components/cust-details/cust-details.component';
import { ManagerComponent } from './components/manager/manager.component';
import {SubHomeComponent} from './components/sub-home/sub-home.component'
import { ProviderComponent } from './components/provider/provider.component';
import { DriverComponent } from './components/driver/driver.component';
const routes: Routes = [
  { path: '', redirectTo: '/home/subHome',  pathMatch: 'full' },
  { path: 'home/order',component: OrderComponent  },
  { path: 'home/subHome',component: SubHomeComponent},
  { path: 'home/mangerRegister',component: ManagerRegisterComponent  },
  { path: 'home/driverRegister',component: DriverRegisterComponent  },
  { path: 'home/providerRegister',component: ProviderRegisterComponent  },
  { path: 'home/customerRegister', component: CustomerRegisterComponent },
  { path: 'home/customer', component: CustomerComponent,
  children: [
    { path: 'order', component:OrderComponent}
  ] },
  { path: 'home/login', component: LogInComponent },
  { path: 'home/customerin', component: CustomrInComponent },
  { path: 'home/custdetails', component: CustDetailsComponent },
  { path: 'home/provider', component: ProviderComponent },
  { path: 'home/driver', component: DriverComponent },
  { path: 'home/manager', component: ManagerComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
