import { Injectable, Signal, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Program } from '../models/program';
@Injectable({
  providedIn: 'root'
})
export class ProgramService {

  programs$: Signal<Program[]> = signal<Program[]>([
    {
      id: 1,
      name: 'Sample Program',
      image: 'https://example.com/sample-image.jpg',
      level: 'Intermediate',
      smallDescription: 'A brief description of the program',
      fullDescription: 'A more detailed description of the program...',
      curriculum: ['Module 1', 'Module 2', 'Module 3'],
      goal: 'Weight Loss',
      frequency: 'Daily',
    }
  ]);
  constructor() {}

  getRecommendedPrograms(goal: string, frequency: string): any[] {
    return [
      { id: 1, name: 'Advanced Strength Training', description: 'High-intensity program focused on building strength and muscle mass.' },
      { id: 2, name: 'Fat Loss Extreme', description: 'High-volume program designed for maximum calorie burn and fat loss.' },
      { id: 3, name: 'Endurance Builder', description: 'Program focused on improving cardiovascular endurance and stamina.' },
    ];
  }
}