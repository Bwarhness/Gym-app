import { Component, EventEmitter, Output, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgramService } from '../../services/program.service';

@Component({
  selector: 'app-experienced-user-flow',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="experienced-flow">
      <h2>Experienced User Program Selection</h2>
      
      @if (step === 1) {
        <div>
          <h3>What's your primary fitness goal?</h3>
          <button *ngFor="let goal of fitnessGoals" (click)="selectGoal(goal)">{{ goal }}</button>
        </div>
      } @else if (step === 2) {
        <div>
          <h3>How many days per week can you commit to working out?</h3>
          <button *ngFor="let frequency of workoutFrequencies" (click)="selectFrequency(frequency)">{{ frequency }}</button>
        </div>
      } @else if (step === 3) {
        <div>
          <h3>Select your preferred program:</h3>
          <ul>
            @for (program of recommendedPrograms; track program.id) {
              <li>
                <button (click)="selectProgram(program)">{{ program.name }}</button>
                <p>{{ program.description }}</p>
              </li>
            }
          </ul>
        </div>
      }
    </div>
  `,
  styles: [`
    .experienced-flow {
      margin-top: 20px;
    }
    button {
      margin: 5px;
      padding: 10px 15px;
    }
    ul {
      list-style-type: none;
      padding: 0;
    }
    li {
      margin-bottom: 15px;
    }
  `]
})
export class ExperiencedUserFlowComponent {
  @Output() programSelected = new EventEmitter<any>();

  private programService = inject(ProgramService);

  step = 1;
  fitnessGoals = ['Build Muscle', 'Lose Fat', 'Improve Endurance', 'Increase Strength'];
  workoutFrequencies = ['2-3 days', '3-4 days', '4-5 days', '5-6 days'];
  selectedGoal = '';
  selectedFrequency = '';
  recommendedPrograms: any[] = [];

  selectGoal(goal: string) {
    this.selectedGoal = goal;
    this.step = 2;
  }

  selectFrequency(frequency: string) {
    this.selectedFrequency = frequency;
    this.getRecommendedPrograms();
    this.step = 3;
  }

  getRecommendedPrograms() {
    this.recommendedPrograms = this.programService.getRecommendedPrograms(this.selectedGoal, this.selectedFrequency);
  }

  selectProgram(program: any) {
    this.programSelected.emit(program);
  }
}