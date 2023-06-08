import { UserService } from './Services/user.service';
import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myStore';

  flage = false;
  linkedin = faLinkedin;
  Github = faGithub;

constructor(public toastr:ToastrService, private UserService:UserService){

}
  showSuccess() {
    this.toastr.success('Hello world!', 'Toastr fun!');
  }

}
