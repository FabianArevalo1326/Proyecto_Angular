import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthServices } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class LoadGuard  implements CanActivate {

  constructor(
    public authService: AuthServices,
    private router: Router){}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      if(this.authService.state){

        if(this.authService.person['profile'] == 'Cliente')this.router.navigate(['/']);
        if(this.authService.person['profile'] == 'Administrador')this.router.navigate(['/admin']);
        return false;
      }
      return true;
  }
}
