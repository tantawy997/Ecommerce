import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { ProductService } from 'src/app/Services/product.service';
import { Product } from 'src/app/_Model/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  ProductList:Product [] = [];
  constructor(public productService:ProductService, public http:HttpClient,public route:Router){
  }

  ngOnInit(){

this.productService.getAllProducts().subscribe(a => {
  this.ProductList = a;
})
  }


}
