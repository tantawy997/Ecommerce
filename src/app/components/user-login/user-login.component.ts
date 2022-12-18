import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/Services/user.service';
import { User } from 'src/app/_Model/user';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent {
  user:User = new User(0,"","", "","");
  users:User []= [];
  /**
   *
   */
  constructor(public router:Router,public ActiveParams:ActivatedRoute,
    public userService:UserService) {}
  onSubmit(){
    this.userService.GetAllUsers().subscribe(a => {
      this.users = a;
    })
    this.userService.Login(this.user.email,this.user.password).subscribe(u => {
      for (let i = 0; i< this.users.length;i++){
      if (u.username !== this.users[i].username || u.password !== this.users[i].password){
         alert("incorrect username or password");
      }else{
      console.log(this.users[i].username);
      console.log(u);
      if (!localStorage.getItem("username")){
        localStorage.setItem("login",JSON.stringify({"username":u.username,"password":u.password}));
        localStorage.setItem("password",JSON.stringify(u.password));
        localStorage.setItem("username",JSON.stringify(u.username));
      }

      }

      }
      return localStorage.getItem("username");
    })
  }

}
