import { inject } from '@angular/core';
import { LoginService } from './../services/login/login-service';
import { CanActivateFn, Router } from '@angular/router';
import { catchError, map, of } from 'rxjs';

export const isLoggedInGuard: CanActivateFn = (route, state) => {

  const loginService = inject(LoginService);
  const router = inject(Router);

  if (loginService.user() === undefined) {
      return loginService.getUser().pipe(
        map( _ => true),
        catchError( _ => {
          router.navigate(['login']);
          return of(false);
        })
      );
    }
  

  if (loginService.user() === null) {
    router.navigate(['login']);
    return false;
  }

  return true;
}
