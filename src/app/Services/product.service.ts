import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable, Output } from '@angular/core';
import { Product } from '../_Model/product';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
storage = window.localStorage;
@Output() event = new EventEmitter();
  constructor(public http:HttpClient) { }


   getAllProducts() {

   return this.http.get<Product[]>("https://fakestoreapi.com/products/");

  }

  GetProductById(id:number){
    return this.http.get<Product>("https://fakestoreapi.com/products/"+ id);
  }

  AddProduct(product:Product[]){
    // this.http.post<Product>("");
    this.storage.setItem("Products", JSON.stringify(product));
  }
  AddProducts(Product:Product){
    this.http.post<Product[]>("https://fakestoreapi.com/products/", JSON.stringify(Product));
  }
  AddProducts1(product:Product[]){
    this.storage.setItem("Products", JSON.stringify(product));
  }

  DeleteProduct(id:number){
    this.http.delete<Product>("https://fakestoreapi.com/products/"+id.toString());
  }
}
