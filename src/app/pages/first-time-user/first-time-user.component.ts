import { Component } from '@angular/core';
import { NewUserFlowComponent } from './new-user-flow.component';
import { ExperiencedUserFlowComponent } from './experienced-user-flow.component';

@Component({
  selector: 'app-first-time-user',
  standalone: true,
  imports: [NewUserFlowComponent, ExperiencedUserFlowComponent],
  template: `
    <div class="container">
      <h1>Welcome, New User!</h1>
      
      @if (step === 1) {
        <div>
          <h2>Step 1: Your Workout Experience</h2>
          <p>Have you worked out before or do you have any experience with it?</p>
          <button (click)="setExperience(true)">Yes, I have experience</button>
          <button (click)="setExperience(false)">No, I'm totally new</button>
        </div>
      } @else {
        @if (hasExperience) {
          <app-experienced-user-flow (programSelected)="onProgramSelected($event)"></app-experienced-user-flow>
        } @else {
          <app-new-user-flow (programSelected)="onProgramSelected($event)"></app-new-user-flow>
        }
      }

      @if (selectedProgram) {
        <div>
          <h2>Great! Let's get started.</h2>
          <p>You've selected: {{ selectedProgram.name }}</p>
          <button (click)="startJourney()">Start My Fitness Journey</button>
        </div>
      }
    </div>
  `,
  styles: [`
    .container {
      max-width: 600px;
      margin: 0 auto;
      padding: 20px;
    }
    button {
      margin: 10px;
      padding: 10px 20px;
    }
  `]
})
export class FirstTimeUserComponent {
  step = 1;
  hasExperience = false;
  selectedProgram: any = null;

  setExperience(hasExperience: boolean) {
    this.hasExperience = hasExperience;
    this.step = 2;
  }

  onProgramSelected(program: any) {
    this.selectedProgram = program;
  }

  startJourney() {
    console.log('Starting journey with:', {
      hasExperience: this.hasExperience,
      selectedProgram: this.selectedProgram
    });
    // Here you would typically navigate to the next page or start the user's personalized experience
  }
}