import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { RouterOutlet, provideRouter, Routes } from '@angular/router';
import { HomeComponent } from './app/pages/home/home.component';
import { ProgramComponent } from './app/pages/program/program.component';
import { SignupComponent } from './app/pages/signup/signup.component';
import { LoginComponent } from './app/pages/login/login.component';
import { FirstTimeUserComponent } from './app/pages/first-time-user/first-time-user.component';
import { ProgramService } from './app/services/program.service';
import { SessionComponent } from './app/pages/session/session.component';
import { ExercisesComponent } from './app/pages/exercises/exercises/exercises.component';

@Component({
    selector: 'app-root',
    imports: [RouterOutlet],
    styles: `
  :host {
    display: block;
    padding: 50px;
  }
  `,
    template: `
  <router-outlet></router-outlet>
  `
})
export class App {
  name = 'Angular';
}

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  {
    path: 'exercises',
    loadComponent: () => import('./app/pages/exercises/exercises/exercises.component').then(c => c.ExercisesComponent),
  },
  {
    path: 'exercises/:id',
    loadComponent: () => import('./app/pages/exercises/edit/edit.component').then(c => c.EditComponent),
  },
  { path: 'program/:name', component: ProgramComponent },
  { path: 'home', component: HomeComponent },
  { path: 'first-time-user', component: FirstTimeUserComponent },
  { path: 'workout/:name', component: SessionComponent },
  { path: 'workout/:name/:session', component: SessionComponent },
];

bootstrapApplication(App, {
  providers: [
    provideRouter(routes),
    provideAnimationsAsync(),
    ProgramService,
  ]
}).catch(err => console.error(err));

