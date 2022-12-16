import { Component } from '@angular/core';
import { ProductService } from 'src/app/Services/product.service';
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

  constructor(private _productsService: ProductService) {}

  ngOnInit() {
    this._productsService.event.subscribe(product => {
      alert("cart-list-ngOnInit");
      let index = -1;
      index = this.cartProducts.findIndex(
        p => p.id === product.id
      );
      if (index != -1) {
        this.cartProducts[index].id += 1;
      } else if (index === -1) {
        this.cartProducts.push(product);
      }
      this.sum();
    });
  }

  deleteProduct(id:number) {
    let index = this.cartProducts.findIndex(item => item.id === id);
    this.cartProducts.splice(index, 1);
    this.sum();
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
