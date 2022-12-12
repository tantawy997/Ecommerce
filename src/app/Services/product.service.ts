import { Injectable } from '@angular/core';
import {Product } from "./models/Product";
@Injectable({
  providedIn: 'root'
})
export class ProductService {


  constructor(public http:HttpClient) { }

  function getAllProducts() {
    return this.http.get<product>("http://localhost:4200/assets/data.json");
  }
}
