import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../_Model/user';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, catchError, first,map,observable, tap } from 'rxjs';
import { ErrorHanldeService } from './error-hanlde.service';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  canActivate(arg0: any, id: any): boolean | import("@angular/router").UrlTree | Observable<boolean | import("@angular/router").UrlTree> | Promise<boolean | import("@angular/router").UrlTree> {
    throw new Error('Method not implemented.');
  }
private userSubject: BehaviorSubject<User | null>;
public user: Observable<User | null>;
//IsUserLoggedIn = new BehaviorSubject<boolean>(JSON.parse(localStorage.getItem('user')!));


  constructor(public http:HttpClient,public ErrorService:ErrorHanldeService,public router:Router)
  {
    this.userSubject = new BehaviorSubject(JSON.parse(localStorage.getItem('user')!));
    this.user = this.userSubject.asObservable();
  }

  private httpOptions:{headers:HttpHeaders}= {
    headers: new HttpHeaders({'content-type': 'application/json'})

  }

  public get userValue() {
    return this.userSubject.value;
}

//email:Pick<User,"email">, password:Pick<User,"password">
  Login(username: string, password: string)
  {

    return this.http.post<User>(environment.BaseUrl+'auth/login',JSON.stringify({"username":username,"password":password})).pipe(
      first(),
      tap(user => {
        localStorage.setItem("user",JSON.stringify(user));
        this.userSubject.next(user);
        return user;
      }),
      catchError(this.ErrorService.HanldeError("login"))
    );
  }

  logout() {
    // remove user from local storage and set current user to null
    localStorage.removeItem('user');
    this.userSubject.next(null);
    this.router.navigate(['/auth/login']);
}

  Register(User:Omit<User,"id">) :Observable<User> {console.log(User);
    return this.http.post<User>(environment.BaseUrl+'auth/login',User,this.httpOptions).pipe(

      first(),catchError(this.ErrorService.HanldeError<User>("Register")));}


  GetUserById(id:number){
   return this.http.get<User>("https://fakestoreapi.com/users/"+id);
  }

  GetAllUsers(){
    return this.http.get<User[]>("https://fakestoreapi.com/users");
  }
}
