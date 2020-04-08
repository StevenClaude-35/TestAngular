import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CustomerModel } from './models/customerModel';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http:HttpClient) { }
  private customerUrl='api/customers';
  saveCustomers(customer:CustomerModel){
    return this.http.post('${this.customerUrl}',customer).catch(this.);
  }
}
