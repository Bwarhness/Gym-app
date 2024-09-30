import { Injectable, Signal, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Program, Session, SessionExercise } from '../models/models';
@Injectable({
  providedIn: 'root'
})
export class ProgramService {

  programs$: Signal<Program[]> = signal<Program[]>([
    
  ]);
  constructor() {}

  getRecommendedPrograms(goal: string, frequency: string): any[] {
    return [
    ];
  }
}
export const MOCK_UPPER_EXERCISES: SessionExercise[] = [
  {
    id: 1,
    name: 'Bench Press',
    description: 'Bench Press',
    image: 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png',
    video: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    tags: [],
    sets: 3,
    reps: 10,
    tempo: '3-2-1',
  },
  {
    id: 2,
    name: 'Pull Ups',
    description: 'Pull Ups',
    image: 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png',
    video: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    tags: [],
    sets: 3,
    reps: 10,
    tempo: '3-2-1',
  },
]
export const MOCK_BOOTY_EXERCISES: SessionExercise[] = [
  {
    id: 1,
    name: 'Hip Thrust',
    description: 'Hip Thrust',
    image: 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png',
    video: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    tags: [],
    sets: 3,
    reps: 10,
    tempo: '3-2-1',
  },
  {
    id: 2,
    name: 'Glute Bridges',
    description: 'Glute Bridges',
    image: 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png',
    video: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    tags: [],
    sets: 3,
    reps: 10,
    tempo: '3-2-1',
  },
]
export const MOCK_LEGS_EXERCISES: SessionExercise[] = [
  {
    id: 1,
    name: 'Squat',
    description: 'Deadlift',
    image: 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png',
    video: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    tags: [],
    sets: 3,
    reps: 10,
    tempo: '3-2-1',
  },
  {
    id: 2,
    name: 'Deadlift',
    description: 'Deadlift',
    image: 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png',
    video: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    tags: [],
    sets: 3,
    reps: 10,
    tempo: '3-2-1',
  },
]
export const WORKOUT_SESSIONS: Session[] = [
  {
    id: 1,
    name: 'Booty',
    exercises: MOCK_BOOTY_EXERCISES,
  },
  {
    id: 2,
    name: 'Upper',
    exercises: MOCK_UPPER_EXERCISES,
  },
  {
    id: 3,
    name: 'Legs',
    exercises: MOCK_LEGS_EXERCISES,
  },

]
export const MOCK_LEGS_UPPER_BOOTY_PROGRAM: Program = {
  id: 1,
  name: 'Legs Upper Booty',
  image: 'https://example.com/legs-upper-booty.jpg',
  level: 'Intermediate',
  smallDescription: 'A brief description of the program',
  fullDescription: 'A more detailed description of the program...',
  sessions: WORKOUT_SESSIONS,
  tags: [
    {
      id: 1,
      name: 'Legs',
    },
    {
      id: 2,
      name: 'Upper',
    },
    {
      id: 3,
      name: 'Booty',
    },


  ],
}