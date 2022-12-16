import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckoutFormComponent } from './checkout-form/checkout-form.component';
import { LoginComponent } from './login/login.component';



@NgModule({
  declarations: [
    CheckoutFormComponent,
    LoginComponent
  ],
  imports: [
    CommonModule
  ]
})
export class UserModule { }
