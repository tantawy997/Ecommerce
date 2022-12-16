import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../_Model/product';

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

  GetCart(){
    return this.http.get<Product[]>("https://fakestoreapi.com/carts/");

  }
  ClearCart(){
    this.storage.clear();
  }
}
