import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ProductService } from 'src/app/Services/product.service';
import { ShoppingCartService } from 'src/app/Services/shopping-cart.service';
import { Product } from 'src/app/_Model/product';
import { rate } from 'src/app/_Model/rate';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  rating:rate= new rate(0,0);
  loading:boolean = false;
  product:Product = new Product(0, "",0,"","","",this.rating,0,'0');
  selectedItem = "1";
  productCount: string[] = ['1', '2', '3', '4', '5'];

  constructor(public cart:ShoppingCartService,public http:HttpClient,public Params:ActivatedRoute, public route:Router,public productService:ProductService){
  }



  ngOnInit(){
    this.Params.params.subscribe(p => {
      console.log(p["id"]);
      this.product.id = Number(p["id"]);
      console.log(this.product.id);
      this.productService.GetProductById(this.product.id).subscribe(prod => {
        this.product = prod;
        this.loading = true;
      })
    })

    // this.Params.queryParams.subscribe(p => {
    //   this.product.id = p["id"];
    // })
  }
  selectedChange(value: any) {
    this.selectedItem = value;
  }

  refresh(): void {
    window.location.reload();
  }

  // ngOnDestroy() {
  //   this.ngUnsubscribe.next();
  //   this.ngUnsubscribe.complete();
  // }

  addProductToCart(pro:Product){

    this.cart.AddToCart(pro).subscribe(a =>{
      console.log(a);
      localStorage.setItem("product", JSON.stringify(a));
    });
  }

}
