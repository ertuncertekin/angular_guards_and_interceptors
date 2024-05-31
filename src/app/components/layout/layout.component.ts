import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';
import { HomePageComponent } from '../home-page/home-page.component';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [
    NavbarComponent,
    FooterComponent,
  ],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {

}
