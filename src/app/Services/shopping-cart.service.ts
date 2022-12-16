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
    const getProduct = this.storage.getItem('Products');
    return getProduct ? JSON.parse(getProduct) : [];
  }

  GetCart(){
    return this.http.get<Product[]>("https://fakestoreapi.com/carts/");
  }


  ClearCart(){
    this.storage.clear();
  }

  AddToCart(product:Product){
    return this.http.post<Product>('https://fakestoreapi.com/carts/',product);
  }

  GetCartItems(){
    return this.http.get<Product>("https://fakestoreapi.com/carts/" )
  }

  increaseQty(qty:number) {
    return this.http.post("https://fakestoreapi.com/carts/",qty);
  }

  Remove(){
    this.http.delete<Product>("https://fakestoreapi.com/carts/delete/");
  }
}
