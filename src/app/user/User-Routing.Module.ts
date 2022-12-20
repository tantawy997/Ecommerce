import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CheckoutFormComponent } from './checkout-form/checkout-form.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: 'login', component: LoginComponent
  },
  {
    path: "checkOut", component: CheckoutFormComponent,
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
