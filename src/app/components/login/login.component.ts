import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { Router, RouterLink } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    NavbarComponent,
    RouterLink,
    ReactiveFormsModule
    //HttpClientModule burası eziyor
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private _http: HttpClient, private router: Router) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }
  postApi() {
    // Token'ı test amaçlı localStorage'a ayarlayalım
    localStorage.setItem('token', "denemetoken123");
    this.router.navigate(["/loading"])
    setTimeout(() => {
      this.router.navigate([""]);
    }, 3000); // 3 saniye beklettik. //
    this._http.post("https://jsonplaceholder.typicode.com/posts", this.loginForm.value).subscribe(res => {
      console.log(res);
    });
  }
}
