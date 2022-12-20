import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ProductsRoutingModule } from './Products-routing.module';



@NgModule({
  declarations: [
    ProductListComponent,
    ProductDetailsComponent,
    ShoppingCartComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ProductsRoutingModule
  ],
  exports:[ProductListComponent,ProductDetailsComponent,ShoppingCartComponent,RouterModule]
})
export class ProductsModule { }
