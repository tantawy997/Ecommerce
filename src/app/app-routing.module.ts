import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductDetailsComponent } from './products/product-details/product-details.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import { ShoppingCartComponent } from './products/shopping-cart/shopping-cart.component';

const routes: Routes = [
  {path:"", component:ProductListComponent},
  {path:"/Details",component:ProductDetailsComponent},
  {path:"/cart", component:ShoppingCartComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
