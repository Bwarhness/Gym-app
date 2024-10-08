import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ExerciseService } from '../../services/exercise.service';
import { Exercise } from '../../models/exercise.model';

@Component({
  selector: 'app-exercise-form',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './exercise-form.component.html',
  styleUrls: ['./exercise-form.component.scss']
})
export class ExerciseFormComponent implements OnInit {
  exerciseForm: FormGroup;
  isEditMode = false;
  exerciseId: number | null = null;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private exerciseService: ExerciseService
  ) {
    this.exerciseForm = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      image: [''],
      video: [''],
      difficulty: ['', Validators.required],
      tags: [[]],
    });
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params['id']) {
        this.isEditMode = true;
        this.exerciseId = +params['id'];
        this.loadExercise(this.exerciseId);
      }
    });
  }

  loadExercise(id: number) {
    const exercise = this.exerciseService.getExerciseById(id)();
    if (exercise) {
      this.exerciseForm.patchValue(exercise);
    } else {
      // Handle error: Exercise not found
      this.router.navigate(['/exercises']);
    }
  }

  onSubmit() {
    if (this.exerciseForm.valid) {
      const exerciseData: Exercise = this.exerciseForm.value;
      if (this.isEditMode && this.exerciseId) {
        exerciseData.id = this.exerciseId;
        this.exerciseService.updateExercise(exerciseData);
      } else {
        this.exerciseService.addExercise(exerciseData);
      }
      this.router.navigate(['/exercises']);
    }
  }

  // Additional methods for tag management can be added here
}