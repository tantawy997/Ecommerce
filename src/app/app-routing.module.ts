import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { UserLoginComponent } from './components/user-login/user-login.component';
import { ProductDetailsComponent } from './products/product-details/product-details.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import { ShoppingCartComponent } from './products/shopping-cart/shopping-cart.component';
import { LoginComponent } from './user/login/login.component';

const routes: Routes =
 [
  {path: 'products', component:ProductListComponent},
  {path:'products/details/:id',component:ProductDetailsComponent},
  {path:'products/cart', component:ShoppingCartComponent},
  {path: 'login', component:UserLoginComponent},
  {path:'',redirectTo: "/",pathMatch:"full"},
  {path:'**', component:ProductListComponent}
];

@NgModule({
  imports: [BrowserModule,RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
