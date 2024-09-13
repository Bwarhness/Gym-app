import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

export interface Program {
  name: string;
  image: string;
  level: string;
  smallDescription: string;
  fullDescription?: string;
  curriculum?: string[];
}

@Injectable({
  providedIn: 'root'
})
export class ProgramService {

  constructor() {}

  getProgramById(id: string): Observable<Program> {
    // For now, we'll return mock data
    // In a real application, you would use this.http.get(`${this.apiUrl}/programs/${id}`)
    return of({
      name: 'Sample Program',
      image: 'https://example.com/sample-image.jpg',
      level: 'Intermediate',
      smallDescription: 'A brief description of the program',
      fullDescription: 'A more detailed description of the program...',
      curriculum: ['Module 1', 'Module 2', 'Module 3']
    });
  }

  getRecommendedPrograms(goal: string, frequency: string): any[] {
    // This is a mock implementation. In a real app, you'd likely fetch this data from an API
    return [
      { id: 1, name: 'Advanced Strength Training', description: 'High-intensity program focused on building strength and muscle mass.' },
      { id: 2, name: 'Fat Loss Extreme', description: 'High-volume program designed for maximum calorie burn and fat loss.' },
      { id: 3, name: 'Endurance Builder', description: 'Program focused on improving cardiovascular endurance and stamina.' },
      // Add more programs as needed
    ].filter(program => {
      // Add logic to filter programs based on goal and frequency
      return true; // This is a placeholder
    });
  }
}