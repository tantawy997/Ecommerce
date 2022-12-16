import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { ProductService } from 'src/app/Services/product.service';
import { Product } from 'src/app/_Model/product';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  product:Product = new Product(0, "",0,"","","");
  selectedItem = "1";
  productCount: string[] = ['1', '2', '3', '4', '5'];

  constructor(public http:HttpClient,public Params:ActivatedRoute, public route:Router,public productService:ProductService){
  }



  ngOnInit(){
    this.Params.params.subscribe(p => {
      console.log(p["id"]);
      this.product.id = Number(p["id"]);
      console.log(this.product.id);
      this.productService.GetProductById(this.product.id).subscribe(prod => {
        this.product = prod;
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

  addProductToCart(id:Product){

  }

}
