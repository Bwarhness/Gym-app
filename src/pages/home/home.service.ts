import { Injectable, signal } from '@angular/core';

const TEST_DATA: Program[] = [
  {
    name: "stronglift",
    level: 'Beginner',
    description: 'Hello world'
  },
  {
  
    name: "Phillips gay shit",
    level: 'Beginner',
    description: 'Hello world'
  },
  {
  
    name: "Emils Test eventyr",
    level: 'Beginner',
    description: 'Hello world'
  }
]
@Injectable({
  providedIn: 'root'
})
export class HomeService {
  programs$ = signal(TEST_DATA);

  constructor() { }

}
interface Program{
  name: string;
  level: 'Beginner' | 'Intermidiate' | 'Expert';
  description: string;
}
