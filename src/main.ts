import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { RouterOutlet, provideRouter, Routes } from '@angular/router';
import { HomeComponent } from './app/pages/home/home.component';
import { ProgramComponent } from './app/pages/program/program.component';
import { SignupComponent } from './app/pages/signup/signup.component';
import { LoginComponent } from './app/pages/login/login.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  styles: `
  :host {
    display: block;
    padding: 50px;
  }
  `,
  template: `
  <router-outlet></router-outlet>
  `,
})
export class App {
  name = 'Angular';
}

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'program/:name', component: ProgramComponent },
  { path: 'home', component: HomeComponent },
];

bootstrapApplication(App, {
  providers: [
    provideRouter(routes),
    provideAnimationsAsync()
  ]
}).catch(err => console.error(err));
