import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ExerciseListComponent } from '../../components/exercise-list/exercise-list.component';
import { Exercise } from '../../models/exercise.model';
import { ExerciseService } from '../../services/exercise.service';

@Component({
  selector: 'app-exercises',
  standalone: true,
  imports: [CommonModule, ExerciseListComponent],
  templateUrl: './exercises.component.html',
})
export class ExercisesComponent {
  exercises = this.exerciseService.exercises;

  constructor(private router: Router, private exerciseService: ExerciseService) {}

  onExerciseSelected(exercise: Exercise): void {
    this.router.navigate(['/exercises/edit', exercise.id]);
  }
}