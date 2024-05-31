import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { Router, RouterLink } from '@angular/router';
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from '@angular/common/http';
import { AuthInterceptor } from '../../auth.interceptor';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    NavbarComponent,
    RouterLink,
    HttpClientModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor(private _http: HttpClient, private router: Router) { }

  getApi() {
    // Token'ı test amaçlı localStorage'a ayarlayalım
    localStorage.setItem('token', "denemetoken123");
    this.router.navigate(["/loading"])
    setTimeout(() => {
      this.router.navigate([""]);
    }, 3000); // 3 saniye beklet //
    this._http.get("https://jsonplaceholder.typicode.com/todos/").subscribe(res => {
      console.log(res);
    });
  }
}
