import { ProductService } from 'src/app/Services/product.service';
import { CategoryService } from './../../Services/category.service';
import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-drop-down-list',
  templateUrl: './drop-down-list.component.html',
  styleUrls: ['./drop-down-list.component.css']
})
export class DropDownListComponent implements OnInit{
@Input() title:string = ""
@Input() DataFromParent:any[]=[]
  data:any
@Output() SelectedData:any = new EventEmitter();
  constructor(public CategoryService:CategoryService,public ProductService:ProductService){

  }

  ngOnInit() {
    return this.CategoryService.GetAllCategories().subscribe((res)=>{
      console.log(res);
      this.data = res;
    },(e)=>{
      alert("there is error loading the categories kindly reload the page")
    })
  }

  DetectChanges(event:any){

    this.SelectedData.emit(event);


  }


}
