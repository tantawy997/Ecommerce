import { Injectable, inject } from '@angular/core';
import { CanActivateFn , ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { UserService } from '../Services/user.service';
//import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
class UserToken {

}


export const authGuard: CanActivateFn = (route, state) => {
  if(
    inject(UserService).isLoggedIn !== true
  ){
    inject(Router).navigateByUrl('auth/login');
  }

  return true;

};
