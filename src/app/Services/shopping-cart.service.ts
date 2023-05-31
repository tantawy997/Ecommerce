import { HttpClient } from '@angular/common/http';
import { Product } from '../_Model/product';
import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';

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
    return this.http.get<Product[]>(environment.BaseUrl+"/carts/");
  }


  ClearCart(){
    this.storage.clear();
  }

  AddToCart(product:any){
    return this.http.post<Product>(environment.BaseUrl+'carts/',product);
  }

  GetCartItems(){
    return this.http.get<Product>(environment.BaseUrl+'carts/' )
  }

  increaseQty(qty:number) {
    return this.http.post(environment.BaseUrl+'carts/',qty);
  }

  Remove(){
    this.http.delete<Product>(environment.BaseUrl+'carts/');
  }
}
