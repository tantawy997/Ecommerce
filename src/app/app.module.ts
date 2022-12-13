import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsModule } from './products/products.module';
import {HttpClientModule}  from "@angular/common/http";
import { SharedModule } from './shared/shared.module';
@NgModule({
    declarations: [
        AppComponent,
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ProductsModule,
        FormsModule,
        HttpClientModule,
        SharedModule,
        ProductsModule,
    ]
})
export class AppModule { }
