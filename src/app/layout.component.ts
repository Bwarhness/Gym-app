import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

@Component({
  standalone: true,
  imports: [CommonModule, RouterModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
  <header>
    <a routerLink="/home" class="header-title">Workout Buddy</a>
  <nav class="nav">
    <a routerLink="/programs" class="nav-link" routerLinkActive="active">Programs</a>
    <a routerLink="/exercises" class="nav-link" routerLinkActive="active">Exercises</a>
    <a routerLink="/login" class="nav-link" routerLinkActive="active">Login</a>
    <a routerLink="/signup" class="nav-link" routerLinkActive="active">Signup</a>
  </nav>
  </header>
    <router-outlet></router-outlet>
  `,
  styles: [`
    header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    background-color: #f0f0f0;
  }
  .header-title {
    margin: 0;
    font-size: 24px;
  }
  .nav {
    display: flex;
    gap: 10px;
    padding: 10px;
    background-color: #f0f0f0;
    .nav-link {
      color: #000;
      text-decoration: none;
    }
  }
  .active {
    color: #000;
    text-decoration: underline;
  }
  `]
})
export class LayoutComponent {
}