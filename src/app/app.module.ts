import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavigationComponent } from './navigation/navigation.component';
import { CreateCustomerComponent } from './shared/customer/create-customer/create-customer.component';
import { CustomerDetailsComponent } from './shared/customer/customer-details/customer-details.component';
import { CreateOrderComponent } from './shared/order/create-order/create-order.component';
import { OrderDetailsComponent } from './shared/order/order-details/order-details.component';
import { CreateProductComponent } from './shared/product/create-product/create-product.component';
import { ProductDetailsComponent } from './shared/product/product-details/product-details.component';
import { CustomerComponent } from './shared/customer/customer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavigationComponent,
    CreateCustomerComponent,
    CustomerDetailsComponent,
    CreateOrderComponent,
    OrderDetailsComponent,
    CreateProductComponent,
    ProductDetailsComponent,
    CustomerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
