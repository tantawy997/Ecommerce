import { UserService } from 'src/app/Services/user.service';
import { Component } from '@angular/core';
import { ShoppingCartService } from 'src/app/Services/shopping-cart.service';
import { Product } from 'src/app/_Model/product';
import { Router } from '@angular/router';

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
  constructor(private ShoppingCart: ShoppingCartService, public UserService:UserService,public router:Router) {

    if (this.UserService.user) {
      this.router.navigate(['/']);
  }

  }

  ngOnInit(): void {
    //this.cartProductList = this.ShoppingCart.GetShoppingCart();
    //this.calculate(this.cartProductList);
  }



  login(){
   return this.UserService.logout();
  }


  logout() {
    this.UserService.logout();
}


}
