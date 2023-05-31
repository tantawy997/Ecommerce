import { HttpClient } from '@angular/common/http';
import { User } from '../_Model/user';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(public http:HttpClient) { }


  Login(username:string,password:string){
    return this.http.post<User>('https://fakestoreapi.com/auth/login', JSON.stringify({"username":username,"password":password}));
  }
  // Login(login:any){
  //   return this.http
  //   .post('user/login', {
  //     email: login.email,
  //     password: login.password,
  //   })
  //   .pipe(
  //     map((res: any) => {
  //       let user = {
  //         email: login.email,
  //         token: res.token,
  //       };
  //       this._token.setToken(res.token);
  //       this._token.setUser(res.data[0]);
  //       console.log(res);
  //       this.userSubject.next(user);
  //       return user;
  //     })
  //   );

  // }

  GetUserById(id:number){
   return this.http.get<User>("https://fakestoreapi.com/users/"+id);
  }

  GetAllUsers(){
    return this.http.get<User[]>("https://fakestoreapi.com/users");
  }
}
