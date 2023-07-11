import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, CanLoadFn, Router, RouterStateSnapshot } from '@angular/router';
import { tap } from 'rxjs';
import { AuthService } from 'src/app/shared/services/auth.service';

export const isLoggedGuardFn: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  const router = inject(Router);
  // inject service vào và gọi hàm, hàm đó trả về một boolean, hoặc observale<boolean>, UrlTree,...
  return inject(AuthService).isLogged().pipe(tap((isLogged) => {
    if (!isLogged) {
      router.navigate(['page-not-found']);
    }
  }));
};

export const isLoggedGuardLoadFn: CanLoadFn = (route, state) => {
  return false;
}

