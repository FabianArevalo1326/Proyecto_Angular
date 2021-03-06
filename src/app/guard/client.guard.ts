import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router, CanActivate } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthServices } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class ClientGuard implements CanActivate{

  constructor(
    public authService: AuthServices,
    private router: Router){}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        if(this.authService.state && this.authService.person['profile'] == 'Cliente'){

          return true;
        }
        this.router.navigate(['/ingresar'], { queryParams: { returnUrl: state.url } });
        return false;
  }

}
