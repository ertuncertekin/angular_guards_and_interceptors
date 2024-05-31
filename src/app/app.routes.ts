import { Routes } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AuthGuard } from './guards/auth.guard';
import { formGuard } from './guards/form-guard.guard';
import { PricingPageComponent } from './components/pricing-page/pricing-page.component';
import { LoadingGifComponent } from './components/loading-gif/loading-gif.component';

export const routes: Routes = [
    {
        path: "",
        component: HomePageComponent,
    },
    {
        path: "login",
        component: LoginComponent
    },
    {
        path: "register",
        component: RegisterComponent,
        canDeactivate: [formGuard]
    },
    {
        path: "pricing",
        component: PricingPageComponent,
        canActivate: [AuthGuard]
    },
    {
        path: "loading",
        component: LoadingGifComponent,
    }
];
