import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';



@NgModule({
  declarations: [
    ProductListComponent,
    ProductDetailsComponent,
    ShoppingCartComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ProductsModule { }
