import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { RouterOutlet, provideRouter, Routes } from '@angular/router';
import { HomeComponent } from './app/pages/home/home.component';
import { ProgramComponent } from './app/pages/program/program.component';

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
  { path: '', component: HomeComponent },
  { path: 'program/:id', component: ProgramComponent },
  // ... other routes ...
];

bootstrapApplication(App, {
  providers: [
    provideRouter(routes),
    provideAnimationsAsync()
  ]
}).catch(err => console.error(err));
