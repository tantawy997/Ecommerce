import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from 'src/app/Services/shopping-cart.service';
import { Product } from 'src/app/_Model/product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{
total:number = 0;
  CartProducts:any[]=[];
  cart:any[]=[]
  quantity:number[] =[];
/**
 *
 */
constructor(private cartService:ShoppingCartService) {

}
  ngOnInit() {
    if ("cart" in localStorage) {
      this.CartProducts = JSON.parse(localStorage.getItem("cart")!);

      // for (const item in this.cart) {

      //   console.log(this.cart[item].cartItems)
      //   this.CartProducts.push(this.cart[item].cartItems)
      //   this.quantity = this.cart[item].quantity;
      // }
  }

  this.total =0;
  for(let i in this.CartProducts){
     this.total += this.CartProducts[i].cartItems.price * this.CartProducts[i].quantity;
  }

  //console.log(Math.round(this.total))
  this.total= Math.round(this.total);
  }

  success:boolean =false;
  deleteProduct(id:number){
    this.CartProducts.splice(id, 1)

    localStorage.setItem("cart", JSON.stringify(this.CartProducts))
  }

  Purchase(id:number){
    this.success = false;
    let products = this.CartProducts.find(item => item.cartItems.id ==  id);
    products
    let model ={
      userId:5,
      date: new Date(),
      products: [products.cartItems.id,products.quantity]
    }
    console.log(model)

    this.cartService.AddToCart(model).subscribe((res)=>{
      this.success =true;
      console.log(res)
    })
  }

  clearCart(){
    localStorage.clear()
    this.CartProducts = JSON.parse(localStorage.getItem("cart")!);

  }
}
