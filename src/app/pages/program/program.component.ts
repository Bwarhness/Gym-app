import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { ProgramService, Program } from '../../services/program.service';

@Component({
  selector: 'app-program',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './program.component.html',
  styleUrls: ['./program.component.scss']
})
export class ProgramComponent implements OnInit {
  programId!: string;
  program?: Program;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
  ) {}

  ngOnInit() {
    setTimeout(() => {
        
    this.program = {
      name: 'Sample Program',
      image: 'https://example.com/sample-image.jpg',
      level: 'Intermediate',
      smallDescription: 'A brief description of the program',
      fullDescription: 'A more detailed description of the program...',
      curriculum: ['Module 1', 'Module 2', 'Module 3']
    };
    }, 1000);
  }
  goBack() {
    this.router.navigate(['/']);
  }
}