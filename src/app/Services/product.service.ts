import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../_Model/product';
@Injectable({
  providedIn: 'root'
})
export class ProductService {


  constructor(public http:HttpClient) { }


   getAllProducts() {

   return this.http.get<Product[]>("https://fakestoreapi.com/products/");

  }

  GetProductById(id:number){
    return this.http.get<Product>("https://fakestoreapi.com/products/"+ id);
  }
}
