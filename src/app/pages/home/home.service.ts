import { Injectable, signal } from '@angular/core';

const TEST_DATA: Program[] = [
  {
    name: "stronglift",
    level: 'Beginner',
    description: 'Hello world',
    smallDescription: 'Hello world',
    image: 'https://material.angular.io/assets/img/examples/shiba2.jpg'
  },
  {
  
    name: "Phillips gay shit",
    level: 'Beginner',
    description: 'Hello world',
    smallDescription: 'Hello world',
    image: 'https://material.angular.io/assets/img/examples/shiba2.jpg'
  },
  {
  
    name: "Emils Test eventyr",
    level: 'Beginner',
    description: 'Hello world',
    smallDescription: 'Hello world',
    image: 'https://material.angular.io/assets/img/examples/shiba2.jpg'
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
  smallDescription: string;
  image: string;
}
