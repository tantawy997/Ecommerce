import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/Services/product.service';
import { ShoppingCartService } from 'src/app/Services/shopping-cart.service';
import { Product } from 'src/app/_Model/product';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent {
amount : number = 0;
  // cartProducts: IProducts[] = [];
   cartProducts: Product[] = [];



  totalQuantity: number= 0;
  price: number = 0;
  totalPrice: number = 0;

  constructor(public _productsService: ProductService,public CartSerivces:ShoppingCartService,
    public Router:Router,public activeRoute:ActivatedRoute) {}

  ngOnInit() {
    this.cartProducts = this.CartSerivces.GetShoppingCart();
    this.calculateTotal();
    for (let i = 0; i < this.cartProducts.length; i++) {

      this.cartProducts[i].TotalPrice = (Number(this.cartProducts[i].amount) * this.cartProducts[i].price).toString();
      this.amount += Number(this.cartProducts[i].amount);
    }


    // this.CartSerivces.GetCart().subscribe(a => {
    //   this.cartProducts = a;
    //   localStorage.setItem("product",JSON.stringify(a))
    //   console.log(localStorage.getItem("Products"));
    // })

  }

  Purchase(id:number){

    this.CartSerivces.ClearCart();
    alert("success");
    location.reload();
    this.Router.navigateByUrl(`/`);
  }

  deleteProduct(id:number) {

    this.cartProducts = this.CartSerivces.GetShoppingCart();
    let ProductsAfter = this.cartProducts.filter((pro :Product) => pro.id !== id );
    localStorage.clear();
    localStorage.setItem("Products",JSON.stringify(ProductsAfter));
    location.reload();
    this.calculateTotal();

  }

  sum(): void {
    this.totalQuantity = 0;
    this.price = 0;
    this.totalPrice = 0;
    if (this.cartProducts) {
      this.cartProducts.map(product => {

        this.price += product.price;
         this.totalPrice += product.price * Number(product.amount);
      });
    }
  }

  calculateTotal() {
    this.totalPrice = this.cartProducts.reduce((acc, item) => {
      this.totalPrice = parseFloat(
        (acc + item.price * Number(item.amount)).toFixed(2)
      );
      return this.totalPrice;
    }, 0);
  }
}
