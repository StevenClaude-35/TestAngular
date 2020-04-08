import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';
import { CustomerDetailsComponent } from '../customer-details/customer-details.component';
import { CustomerComponent } from '../customer.component';

const customRoutes:Routes=[
  {path:'customer',component:CustomerComponent,
  children:[
    {path: '',component:CustomerDetailsComponent}
  ]
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class CustomerRoutingModule { }
