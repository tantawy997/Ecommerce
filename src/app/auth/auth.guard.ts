import { Injectable, inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { UserService } from '../Services/user.service';

@Injectable()
class UserToken {
}
export const authGuard: CanActivateFn = (route, state) => {
  return inject(UserService).canActivate(inject(UserToken), route.params);

};
