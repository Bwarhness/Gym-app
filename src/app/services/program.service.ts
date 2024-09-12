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
  private apiUrl = 'your-api-url'; // Replace with your actual API URL

  constructor(private http: HttpClient) {}

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
}