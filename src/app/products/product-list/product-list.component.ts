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
  selectedItem = "1";
  num:number = 0;
  productCount: string[] = ['1', '2', '3', '4', '5'];

  productCart:Product = new Product(0, "", 0, "", "", "","0");
  constructor(public productService:ProductService, public http:HttpClient,public route:Router,public CartServices:ShoppingCartService){
  }

// how to create shopping cart in angular ?


  ngOnInit(){

this.productService.getAllProducts().subscribe(a => {
  this.ProductList = a;
})
  }

  selectedChange(value: any) {
    this.selectedItem = value;
  }


  addProductToCart(product:Product, num:number){
    this.CartServices.AddToCart(product).subscribe(a =>{
      console.log(a);
      this.productCart = a;
      num += 1;
      console.log(this.ProductList);
      alert("product Added");
    })
  }

  AddToCart(product: Product) {
    const cartProducts: Product[] = this.CartServices.GetShoppingCart();
    let productInCart = cartProducts.find((ele) => ele.id === product.id);
    console.log(product.id);
    if (productInCart) {
      productInCart.amount = this.selectedItem;
      productInCart ? this.productService.AddProduct(cartProducts) : null;
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


  refresh() {
    window.location.reload();
  }

  details(id:number){
    console.log(id);
    this.productService.GetProductById(id).subscribe(a => {
      this.productItem = a;
      console.log(a);
      localStorage.setItem("this.productCart",this.productCart.title);
      // this.route.navigate(["details"], {relativeTo: th})


    })
    this.route.navigateByUrl("/products/details/"+id.toString());
  }
}
