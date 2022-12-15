import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {
storage = window.localStorage;
  constructor(public http:HttpClient) { }

  GetShoppingCart(){
    const getProduct = this.storage.getItem('products');
    return getProduct ? JSON.parse(getProduct) : [];
  }

  ClearCart(){
    this.storage.clear();
  }
}
