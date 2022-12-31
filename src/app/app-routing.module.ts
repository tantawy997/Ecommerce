import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { ProductDetailsComponent } from './products/product-details/product-details.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import { ShoppingCartComponent } from './products/shopping-cart/shopping-cart.component';
import { LoginComponent } from './user/login/login.component';

const routes: Routes =
  [
  {path:"Products",component:ProductListComponent},
  {path:"Products/details/:id", component:ProductDetailsComponent},
  {path:"Products/cart", component:ShoppingCartComponent},
  {path:"user/login", component:LoginComponent},
  {path:'',redirectTo: "/",pathMatch:"full"},
  {path:'**', component:ProductListComponent},
];

@NgModule({
  imports: [BrowserModule,RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
