import { CategoryService } from './../../Services/category.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { ProductService } from 'src/app/Services/product.service';
import { ShoppingCartService } from 'src/app/Services/shopping-cart.service';
import { Product } from 'src/app/_Model/product';
import { rate } from 'src/app/_Model/rate';



@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  categories:string[]=[]
  ProductList:Product [] = [];
  @Input() productItem!: Product;
  selectedItem = 1;
  num:number = 0;
  productCount: string[] = ['1', '2', '3', '4', '5'];
  rating:rate= new rate(0,0);
  productCart:Product = new Product(0, "", 0, "", "", "",this.rating);
  constructor(public productService:ProductService, public http:HttpClient,public route:Router,public CartServices:ShoppingCartService,public CategoryService:CategoryService){
  }

// how to create shopping cart in angular ?
loading:boolean =false;
CartProducts:any []= [];
ngOnInit(){
this.getCategories();
this.productService.getAllProducts().subscribe(a => {
  this.ProductList = a;
  this.loading =true;

},(e)=>alert(e.error))
  }

  selectedChange(value: any) {
    console.log(value)
    this.selectedItem = value;
  }


  addProductToCart(product:Product, num:number){
    this.CartServices.AddToCart(product).subscribe(a =>{
      console.log(a);
      this.productCart = a;
      num += 1;
      console.log(this.ProductList);
      alert("product Added");
    })
  }

  AddToCart(Prod: any) {
    if ("cart" in localStorage) {
      this.CartProducts = JSON.parse(localStorage.getItem("cart")!);
    } else {
      this.CartProducts = []; // Initialize the CartProducts array
    }

    let exist = this.CartProducts.find((i: any) => i.cartItems.id === Prod.id);

    if (exist) {
      alert("Product is already in your cart");
    } else {
      this.CartProducts.push({ cartItems: Prod, quantity: this.selectedItem });
      localStorage.setItem("cart", JSON.stringify(this.CartProducts));
    }
  }



  refresh() {
    window.location.reload();
  }

  details(id:number){
    console.log(id);
    this.productService.GetProductById(id).subscribe(a => {
      this.productItem = a;
      console.log(a);
      localStorage.setItem("this.productCart",this.productCart.title);
      // this.route.navigate(["details"], {relativeTo: th})


    })
    return this.route.navigateByUrl("/Products/details/"+id);
  }


  GetProductsByCategory(category:any){

    console.log(category.target.value);
    let value = category.target.value;
    if(value != "All"){
      this.productService.GetProductsByCategory(value).subscribe((res:any)=>{
        this.ProductList = res;
      })
    }else{
      this.productService.getAllProducts().subscribe((res)=>{
        this.ProductList = res;
      })
    }


  }


  getCategories(){
    return this.CategoryService.GetAllCategories().subscribe((res)=>{
      console.log(res);
      this.categories = res;
    },(e)=>{
      alert("there is error loading the categories kindly reload the page")
    })
  }
}
