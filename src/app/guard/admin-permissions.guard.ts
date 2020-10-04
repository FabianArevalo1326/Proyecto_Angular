import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router} from '@angular/router';
import { Observable } from 'rxjs';
import {AuthServices} from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AdminPermissionsGuard implements CanActivate {
  constructor(
      public authService: AuthServices,
      private router: Router){}

  canActivate(
      next: ActivatedRouteSnapshot,
      state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (this.authService.state && this.authService.person['profile'] == 'Administrador' || !this.authService.state) {

      return true;
    } else if (this.authService.state && this.authService.person['profile'] == 'Cliente') {

      this.router.navigate(['/']);
      return false;
    }
  }
}
