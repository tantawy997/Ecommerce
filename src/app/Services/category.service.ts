import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(public http:HttpClient) { }

 GetAllCategories() {

  return this.http.get<any[]>(environment.BaseUrl+"products/categories");
}
}
