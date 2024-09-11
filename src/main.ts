import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { RouterOutlet, provideRouter } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

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

  bootstrapApplication(App, {
  providers: [
    provideRouter([
      {
        path: "",
        component: HomeComponent
      }
    ]),
  ]
});
