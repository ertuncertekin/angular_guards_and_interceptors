import { Component, NgModule, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NavbarComponent } from '../navbar/navbar.component';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LoadingGifComponent } from '../loading-gif/loading-gif.component';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    NavbarComponent,
    LoadingGifComponent,
    ReactiveFormsModule,
    CommonModule,
    FormsModule,
  ],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  private formSubmitted = false;
  loadingVisible = false;

  constructor(private fb: FormBuilder, private router: Router) {
    this.registerForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      birthdayDate: ['', Validators.required],
      gender: ['', Validators.required],
      emailAddress: ['', Validators.required],
      phoneNumber: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.loadingVisible = false; // Başlangıçta loading gif gizlenmiş olacak
  }

  onSubmit() {
    this.formSubmitted = true;

    if (this.registerForm.valid) {
      console.log('Form submitted', this.registerForm.value);
      alert('Kayıt oldunuz, Giriş Sayfasına Yönlendiriliyorsunuz!');
      this.loadingVisible = true
      setTimeout(() => {
        this.router.navigate(['/login']);
      }, 3000); // 3 saniye beklet //
    }
  }

  // Kullanıcı formda değişiklik yaptıysa true döner
  isFormDirty(): boolean {
    return this.registerForm.dirty && !this.formSubmitted;
  }
}
