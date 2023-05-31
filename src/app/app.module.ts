
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsModule } from './products/products.module';
import {HttpClientModule}  from "@angular/common/http";
import { SharedModule } from './shared/shared.module';
import { OrderModule } from './order/order.module';
import { UserModule } from './user/user.module';
import { ToastrModule } from 'ngx-toastr';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CartModule } from './cart/cart.module';

@NgModule({
    declarations: [
        AppComponent,
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        HttpClientModule,
        SharedModule,
        ProductsModule,
        RouterModule,
        CartModule,
        ToastrModule.forRoot(),


    ],
})
export class AppModule { }
