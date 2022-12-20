import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckoutFormComponent } from './checkout-form/checkout-form.component';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { UserRoutingModule } from './User-Routing.Module';



@NgModule({
  declarations: [
    CheckoutFormComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,RouterModule,FormsModule,UserRoutingModule
  ],
  exports:[LoginComponent,RouterModule,CheckoutFormComponent]
})
export class UserModule { }
