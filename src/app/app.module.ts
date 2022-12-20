import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsModule } from './products/products.module';
import {HttpClientModule}  from "@angular/common/http";
import { SharedModule } from './shared/shared.module';
import { RouterModule } from '@angular/router';
import { OrderModule } from './order/order.module';
import { UserModule } from './user/user.module';

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
        OrderModule,
        UserModule,
        RouterModule,

    ],
})
export class AppModule { }
