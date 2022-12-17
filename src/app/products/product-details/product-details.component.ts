import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { ProductService } from 'src/app/Services/product.service';
import { ShoppingCartService } from 'src/app/Services/shopping-cart.service';
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

  constructor(public cart:ShoppingCartService,public http:HttpClient,
    public Params:ActivatedRoute, public route:Router,public productService:ProductService){
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

  addProductToCart(pro:Product){

    this.cart.AddToCart(pro).subscribe(a =>{
      console.log(a);
      localStorage.setItem("product", JSON.stringify(a));
    });
  }


  AddToCart(product: Product) {

    const cartProducts: Product[] = this.cart.GetShoppingCart();
    let productInCart = cartProducts.find((ele) => ele.id === product.id);
    console.log(product.id);
    if (productInCart) {
      productInCart.amount = this.selectedItem;
      productInCart ? this.productService.AddProduct(cartProducts) : null;
      if (productInCart.id === product.id){
        cartProducts.push(Object.assign(product, { amount: this.selectedItem }));
        this.productService.AddProduct(cartProducts);
      }
      console.log(productInCart);
    } else {
      cartProducts.push(Object.assign(product, { amount: this.selectedItem }));
      this.productService.AddProduct(cartProducts);
      const message = `${product.title} has been added to your cart.`;
      alert(message);
      console.log(productInCart);
      console.log(cartProducts);
    }
    this.refresh();
  }

}
