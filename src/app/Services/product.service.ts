import { HttpClient } from '@angular/common/http';
import { Product } from '../_Model/product';
import { EventEmitter, Injectable, Output } from '@angular/core';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
storage = window.localStorage;
@Output() event = new EventEmitter();
  constructor(public http:HttpClient) { }


   getAllProducts() {

   return this.http.get<Product[]>(environment.BaseUrl+"products/");

  }

  GetProductById(id:number){
    return this.http.get<Product>(environment.BaseUrl+"products/"+ id);
  }

  AddProduct(product:Product[]){
    // this.http.post<Product>("");
    this.storage.setItem("Products", JSON.stringify(product));
  }
  AddProducts(Product:Product){
    this.http.post<Product[]>(environment.BaseUrl+"products/", JSON.stringify(Product));
  }
  AddProducts1(product:Product[]){
    this.storage.setItem("Products", JSON.stringify(product));
  }

  DeleteProduct(id:number){
    this.http.delete<Product>(environment.BaseUrl+"products/"+id.toString());
  }


  GetProductsByCategory(cat:string){
    return this.http.get(environment.BaseUrl+"products/category/"+cat)
  }
}
