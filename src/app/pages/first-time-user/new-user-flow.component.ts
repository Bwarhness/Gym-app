import { Component, EventEmitter, Output, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgramService } from '../../services/program.service';

@Component({
  selector: 'app-new-user-flow',
  standalone: true,
  imports: [CommonModule],
  template: `
    @if (step === 1) {
      <div>
        <h2>Step 2: Your Fitness Goals</h2>
        <p>What is your main fitness goal?</p>
        @for (goal of goals; track goal) {
          <button (click)="selectGoal(goal)">
            {{ goal }}
          </button>
        }
      </div>
    }

    @if (step === 2) {
      <div>
        <h2>Recommended Workout Programs</h2>
        <p>Based on your goal: {{ selectedGoal }}</p>
        @for (program of recommendedPrograms; track program.id) {
          <div class="program-card">
            <h3>{{ program.name }}</h3>
            <p>Current Users: {{ program.currentUsers }}</p>
            <p>Average Gains: {{ program.averageGains }}</p>
            <p>Duration: {{ program.duration }}</p>
            <button (click)="selectProgram(program)">Choose This Program</button>
          </div>
        }
      </div>
    }
  `,
  styles: [`
    .program-card {
      border: 1px solid #ccc;
      padding: 15px;
      margin-bottom: 15px;
      border-radius: 5px;
    }
  `]
})
export class NewUserFlowComponent {
  @Output() programSelected = new EventEmitter<any>();

  private programService = inject(ProgramService);

  step = 1;
  selectedGoal = '';
  goals = ['Strength', 'Looks', 'Endurance'];
  recommendedPrograms: any[] = [];

  selectGoal(goal: string) {
    this.selectedGoal = goal;
    this.recommendedPrograms = this.programService.getRecommendedPrograms(goal, 'weekly');
    this.step = 2;
  }

  selectProgram(program: any) {
    this.programSelected.emit(program);
  }
}