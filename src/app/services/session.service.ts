import { Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Exercise, Session, SessionExercise, WorkoutSession } from '../models/models';
import { MOCK_BOOTY_EXERCISES, ProgramService } from './program.service';


@Injectable({
  providedIn: 'root'
})
export class SessionService {
  exercises = signal<SessionExercise[]>(MOCK_BOOTY_EXERCISES);

  constructor(public programService: ProgramService) {}
  getExercises(): SessionExercise[] {
    return this.exercises();
  }
}