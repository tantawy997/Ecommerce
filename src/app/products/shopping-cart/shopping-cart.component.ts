import { Component } from '@angular/core';
import { ProductService } from 'src/app/Services/product.service';
import { ShoppingCartService } from 'src/app/Services/shopping-cart.service';
import { Product } from 'src/app/_Model/product';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent {
amount : number =0;
  // cartProducts: IProducts[] = [];
   cartProducts: Product[] = [];


  totalQuantity: number= 0;
  price: number = 0;
  totalPrice: number = 0;

  constructor(private _productsService: ProductService,public CartSerivces:ShoppingCartService) {}

  ngOnInit() {

    this.CartSerivces.GetCart().subscribe(a => {
      this.cartProducts = a;
      localStorage.getItem("storage");
    })



  }


  deleteProduct(id:number) {

    localStorage.clear();
    this.CartSerivces.ClearCart();
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
