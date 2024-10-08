import { Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Exercise, Session, SessionExercise, WorkoutSession } from '../../models/models';
import { MOCK_BOOTY_EXERCISES, ProgramService } from './program.service';
import { ExerciseSession } from '../models/exercise.model';


  @Injectable({
  providedIn: 'root'
})
export class SessionService {
      exercises = signal<ExerciseSession[]>([]);

  constructor(public programService: ProgramService) {}
  getExercises(): ExerciseSession[] {
    return this.exercises();
  }
}