import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { ProductsRoutingModule } from './Products-routing.module';
import { ToastrModule } from 'ngx-toastr';



@NgModule({
  declarations: [
    ProductListComponent,
    ProductDetailsComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    SharedModule,
    ToastrModule.forRoot(),

  ],
  exports:[ProductListComponent,ProductDetailsComponent,RouterModule,ProductsRoutingModule]
})
export class ProductsModule { }
