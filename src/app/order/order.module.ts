import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfirmationOrderComponent } from './confirmation-order/confirmation-order.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    ConfirmationOrderComponent
  ],
  imports: [
    CommonModule,
    RouterModule,

  ],
  exports:[RouterModule,ConfirmationOrderComponent]
})
export class OrderModule { }
