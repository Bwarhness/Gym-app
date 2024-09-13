import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Program } from '../../models/program';

@Component({
  selector: 'app-program-list',
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="program-list">
      <div *ngFor="let program of programs" class="program-card" (click)="navigateToProgram(program.name)">
        <img [src]="program.image" [alt]="program.name">
        <h3>{{ program.name }}</h3>
        <p>Level: {{ program.level }}</p>
        <p>{{ program.smallDescription }}</p>
      </div>
    </div>
  `,
  styles: [`
    .program-list {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 20px;
    }
    .program-card {
      border: 1px solid #ddd;
      border-radius: 8px;
      padding: 16px;
      text-align: center;
      cursor: pointer;
    }
    .program-card img {
      max-width: 100%;
      height: auto;
      border-radius: 4px;
    }
  `]
})
export class ProgramListComponent {
  constructor(private router: Router) {}
  @Input() programs: Program[] = [];
  navigateToProgram(programName: string) {
    // Assuming you have a route for individual programs
    // Replace 'program' with the actual route path if different
    this.router.navigate(['/program', programName]);
  }
}