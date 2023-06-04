import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/_Model/user';
import { UserService } from './../../Services/user.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { first } from 'rxjs';

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

  user:User = new User(0,"","","","","")

  constructor(public UserService:UserService, public router:Router, private activeRoute:ActivatedRoute,private ToastrService:ToastrService){
  }
  ngOnInit() {
    this.SignIn = this.CreateFormsGroup();
  }
  CreateFormsGroup(): FormGroup {
    return new FormGroup({
      name: new FormControl("", [Validators.required,Validators.minLength(3)]),
      email: new FormControl("", [Validators.required,Validators.email]),
      password:new FormControl("", [Validators.required, Validators.maxLength(7)])
    })
  }


  onSubmit(){
    this.UserService.Register(this.SignIn.value)
    .pipe(first())
    .subscribe((res)=>{
      console.log(res);
      this.ToastrService.success("registration was successful")
      this.router.navigate(['auth/login']);
    },
    (e)=>{

      console.log(e.message);
      this.loading = false;
      this.ToastrService.error(e.message);

    })
  }
}
