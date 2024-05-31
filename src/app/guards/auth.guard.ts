import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {

    const token = localStorage.getItem('token');

    if (token) {
      return true;
    } else {
      window.alert('Görüntülemek İstediğiniz Sayfa İçin Giriş Yapmanız Gerekiyor!');
      this.router.navigate(["/loading"])
      setTimeout(() => {
        this.router.navigate(['/login']);
      }, 3000); // 3 saniye beklet //
      return false;
    }
  }
}
