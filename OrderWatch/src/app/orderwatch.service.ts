import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { OrderWatch } from './orderwatch';
import { Dropdown } from './Dropdown';

@Injectable({
  providedIn: 'root'
})
export class OrderwatchService {

   baseURL = "https://localhost:7098/api/Orderwatch";
   dropdownURL="https://localhost:7098/GetDropDown";

  constructor(private httpClient: HttpClient) {}

    getOrderwatchList(): Observable<OrderWatch[]>{
      return this.httpClient.get<OrderWatch[]>(`${this.baseURL}`);
    }
    getOrderwatchById(id: number): Observable<OrderWatch>{
      return this.httpClient.get<OrderWatch>(`${this.baseURL}/${id}`); }

    createOrderWatch(orderWatch: OrderWatch): Observable<Object>{
      console.log("testing");
      console.log(orderWatch);
      return this.httpClient.post(`${this.baseURL}`, orderWatch);
    }
  
    deleteOrderWatch(id: number): Observable<Object>{
      return this.httpClient.delete(`${this.baseURL}/${id}`);
    }
    updateOrderWatch(id: number, orderWatch:OrderWatch): Observable<Object>{
      return this.httpClient.put(`${this.baseURL}/${id}`, orderWatch);
    }
    getDropdownList(): Observable<Dropdown[]>{
      return this.httpClient.get<Dropdown[]>(`${this.dropdownURL}`);
    }
   
}
