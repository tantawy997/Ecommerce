import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/Services/product.service';
import { ShoppingCartService } from 'src/app/Services/shopping-cart.service';

@Component({
  selector: 'app-confirmation-order',
  templateUrl: './confirmation-order.component.html',
  styleUrls: ['./confirmation-order.component.css']
})
export class ConfirmationOrderComponent implements OnInit {

  totalPrice:number = 0;

  constructor(public Cart:ShoppingCartService,public ProductService:ProductService,public router:Router,public activeRoute:ActivatedRoute){
  }

ngOnInit() {
  this.activeRoute.params.subscribe(a =>{
    this.totalPrice = Number(a["totalPrice"]);
  })
}

}
