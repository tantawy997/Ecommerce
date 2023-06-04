import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { first } from 'rxjs';
import { UserService } from 'src/app/Services/user.service';
import { User } from 'src/app/_Model/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  user:User = new User(0,"","", "","","");
  users:User []= [];
  loading = false;
  submitted = false;
  SignIn:FormGroup;
  constructor(public router:Router,
    public ActiveParams:ActivatedRoute,
    private toaster:ToastrService,
    private formBuilder: FormBuilder,
    
    public userService:UserService) {
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
      username: new FormControl("", [Validators.required]),
      password:new FormControl("", [Validators.required, Validators.maxLength(7)])
    })
  }

form!: FormGroup;

  onSubmit(){
    this.submitted = true;
     // stop here if form is invalid

     console.log(this.SignIn.value);

     if (this.SignIn.invalid) {
      return;
  }
  this.loading = true;

    this.userService.Login(this.SignIn.value.username,this.SignIn.value.password)
    .pipe(first())
    .subscribe((res)=>{
        this.toaster.success("success", "login success")
        const returnUrl = this.ActiveParams.snapshot.queryParams['returnUrl'] || '/';
        this.router.navigateByUrl(returnUrl);
    },
    (e)=>{
      this.loading = false;
      console.log(e.message);
      this.toaster.error(e.message)

    })
  }


}
