import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { ProductService } from 'src/app/Services/product.service';
import { ShoppingCartService } from 'src/app/Services/shopping-cart.service';
import { Product } from 'src/app/_Model/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  ProductList:Product [] = [];
  @Input() productItem!: Product;
  selectedItem = '1';
  productCount: string[] = ['1', '2', '3', '4', '5'];

  product:Product = new Product(0, "", 0, "", "", "");
  constructor(public productService:ProductService, public http:HttpClient,public route:Router,public CartServices:ShoppingCartService){
  }


  ngOnInit(){

this.productService.getAllProducts().subscribe(a => {
  this.ProductList = a;
})
  }

  selectedChange(value: any) {
    this.selectedItem = value;
  }

  addProductToCart(product: Product): void {
    const cartProducts: Product[] = this.CartServices.GetShoppingCart();
    let productInCart = cartProducts.find((p) => p.id === product.id);
    if (productInCart) {
      //productInCart.amount = this.selectedItem;
      productInCart ? this.productService.AddProducts1(cartProducts) : null;
    } else {
      cartProducts.push(Object.assign(product, { amount: this.selectedItem }));
      this.productService.AddProducts1(cartProducts);
      const message = `${product.title} has been added to your cart.`;
      alert(message);
    }
    this.refresh();
  }

  refresh(): void {
    window.location.reload();
  }

  details(id:number){
    console.log(id);
    this.productService.GetProductById(id).subscribe(a => {
      this.productItem = a;
      console.log(a);
      // this.route.navigate(["details"], {relativeTo: th})


    })
    console.log(this.route.navigateByUrl("/products/"+id));
  }
}
