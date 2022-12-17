import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductDetailsComponent } from './products/product-details/product-details.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import { ShoppingCartComponent } from './products/shopping-cart/shopping-cart.component';

const routes: Routes = [
  {path:"products", component:ProductListComponent},
  {path:"products/details/:id",component:ProductDetailsComponent},
  {path:"products/cart", component:ShoppingCartComponent},
  
  // {path:"",component:ProductListComponent}
  // {path:"", component:ProductListComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
