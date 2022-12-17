import { Component } from '@angular/core';
import { ShoppingCartService } from 'src/app/Services/shopping-cart.service';
import { Product } from 'src/app/_Model/product';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  amount:number = 0;
  myStore:string = "myStore";
  flage:boolean = false;
  cartProductList!: Product[];
  constructor(private ShoppingCart: ShoppingCartService) {}

  ngOnInit(): void {
    this.cartProductList = this.ShoppingCart.GetShoppingCart();
    this.calculate(this.cartProductList);
  }

  calculate(cart: Product[]) {
    let sum = 0;
    cart.forEach((item) => {
      sum += Number(item.amount);
    });
    const ele = document.getElementById('cartAmount') as HTMLElement;
    ele.innerHTML = sum.toString();
  }

  login(){
    if (!localStorage.getItem("username")){
      this.flage = true;
    }else {
      this.flage = false;
    }
  }
}
