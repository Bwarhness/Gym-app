import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProgramListComponent } from '../../app/components/program-list/program-list.component';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ProgramListComponent],
  template: `
    <h1>Welcome to Our Programs</h1>
    <app-program-list [programs]="programs"></app-program-list>
  `,
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  programs = this.homeService.getPrograms();

  constructor(private homeService: HomeService, private router: Router) {}

  navigateToProgram(programId: string) {
    this.router.navigate(['/program', programId]);
  }
}