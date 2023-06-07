import { UserService } from 'src/app/Services/user.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent {


  /**
   *
   */
  constructor(public UserService:UserService) {

  }

  forgetPassword(event:any){
    console.log(event.value);
   this.UserService.ForgotPassword(event.value)
  }
}
