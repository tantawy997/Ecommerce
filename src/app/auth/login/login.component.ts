import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/Services/user.service';
import { User } from 'src/app/_Model/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  user ={} as User;
  users:User []= [];
  loading = false;
  submitted = false;
  SignIn:FormGroup;
  constructor(public router:Router,
    public ActiveParams:ActivatedRoute,
    private toaster:ToastrService,
    public UserService:UserService) {
      this.SignIn = this.CreateFormsGroup();
    }


  // onSubmit(){
  //   this.userService.GetAllUsers().subscribe(a => {
  //     this.users = a;
  //   })
  //   this.userService.Login(this.user.email,this.user.password).subscribe(u => {
  //     for (let i = 0; i< this.users.length;i++){
  //     if (u.username !== this.users[i].username || u.password !== this.users[i].password){
  //        alert("incorrect username or password");
  //     }else{
  //     console.log(this.users[i].username);
  //     console.log(u);
  //     if (!localStorage.getItem("username")){
  //       localStorage.setItem("login",JSON.stringify({"username":u.username,"password":u.password}));
  //       localStorage.setItem("password",JSON.stringify(u.password));
  //       localStorage.setItem("username",JSON.stringify(u.username));
  //     }

  //     }

  //     }
  //     return localStorage.getItem("username");
  //   })
  // }

  ngOnInit() {
    this.SignIn = this.CreateFormsGroup();
  }
  CreateFormsGroup(): FormGroup {
    return new FormGroup({
      email: new FormControl("", [Validators.required,Validators.email]),
      password:new FormControl("", [Validators.required, Validators.maxLength(7)])
    })
  }

form!: FormGroup;

  onSubmit(){
    this.submitted = true;
     // stop here if form is invalid


  console.log(this.SignIn.value);

  //this.loading = true;
   return this.UserService.LoginUser(this.SignIn.value.email,this.SignIn.value.password);
  }


  GoToRegister(){
    this.router.navigateByUrl("auth/Register");
  }

  forgetPassword(){
    this.router.navigateByUrl("auth/forgot-password");
  }
}
