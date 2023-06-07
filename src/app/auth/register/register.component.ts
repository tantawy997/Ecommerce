import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/_Model/user';
import { UserService } from './../../Services/user.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  form!: FormGroup;
  loading = false;
  submitted = false;

  SignIn:FormGroup =new FormGroup({})

  user = {} as User;

  constructor(public UserService:UserService, public router:Router, private activeRoute:ActivatedRoute,private ToastrService:ToastrService){
  }
  ngOnInit() {
    this.SignIn = this.CreateFormsGroup();
  }
  CreateFormsGroup(): FormGroup {
    return new FormGroup({
      displayName: new FormControl("", [Validators.required,Validators.minLength(3)]),
      email: new FormControl("", [Validators.required,Validators.email]),
      password:new FormControl("", [Validators.required, Validators.maxLength(7)])
    })
  }


  onSubmit(){
    console.log(this.SignIn.value);

    this.UserService.Register(this.SignIn.value.email, this.SignIn.value.password);

  }

  GoToLogin(){
    this.router.navigateByUrl("auth/login");
  }
}
