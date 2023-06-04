
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { RegisterComponent } from './auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';
import { authGuard } from './auth/auth.guard';

const routes: Routes =
  [
  //{path:"Products",component:ProductListComponent ,canActivate:[authGuard]},
  //{path:"Products/details/:id", component:ProductDetailsComponent, canActivate:[authGuard]},
  {path:"auth/Register", component:RegisterComponent},
  {path:"auth/login", component:LoginComponent},


  {path:"products",loadChildren:()=> import("../app/products/products.module").then((mod)=> mod.ProductsModule), canActivate:[authGuard]},
  {path:"cart",loadChildren:()=> import("../app/cart/cart.module").then((mod)=> mod.CartModule), canActivate:[authGuard]},
    //{path:"cart", component:CartComponent, canActivate:[authGuard]},

  {path:"",loadChildren:()=> import("../app/products/products.module").then((mod)=> mod.ProductsModule), canActivate:[authGuard]},
  {path:'**', redirectTo :"Products",pathMatch:"full"},

];

@NgModule({
  imports: [BrowserModule,RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
