import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../_Model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(public http:HttpClient) { }


  Login(username:string,password:string){
    return this.http.post<User>('https://fakestoreapi.com/auth/login', JSON.stringify({"username":username,"password":password}));
  }

  GetUserById(id:number){
   return this.http.get<User>("https://fakestoreapi.com/users/"+id);
  }

  GetAllUsers(){
    return this.http.get<User[]>("https://fakestoreapi.com/users");
  }
}
