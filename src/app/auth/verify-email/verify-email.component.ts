import { UserService } from 'src/app/Services/user.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-verify-email',
  templateUrl: './verify-email.component.html',
  styleUrls: ['./verify-email.component.css']
})
export class VerifyEmailComponent {

  /**
   *
   */
  constructor(public UserService:UserService) {

  }
}
