import { Injectable, signal, computed } from '@angular/core';
import { Exercise } from '../models/exercise.model';

@Injectable({
  providedIn: 'root'
})
export class ExerciseService {
  private exercisesSignal = signal<Exercise[]>([
    {
      id: 1,
      name: 'Push-up',
      description: 'A classic upper body exercise that targets the chest, shoulders, and triceps.',
      image: 'assets/push-up.jpg',
      video: 'https://example.com/push-up-video',
      tags: [{ id: 1, name: 'Upper Body' }, { id: 5, name: 'Strength' }],
      difficulty: 'Beginner'
    },
    {
      id: 2,
      name: 'Squat',
      description: 'A fundamental lower body exercise that works the quadriceps, hamstrings, and glutes.',
      image: 'assets/squat.jpg',
      video: 'https://example.com/squat-video',
      tags: [{ id: 2, name: 'Lower Body' }, { id: 5, name: 'Strength' }],
      difficulty: 'Beginner'
    },
    {
      id: 3,
      name: 'Plank',
      description: 'An isometric core exercise that improves stability and posture.',
      image: 'assets/plank.jpg',
      video: 'https://example.com/plank-video',
      tags: [{ id: 3, name: 'Core' }, { id: 6, name: 'Stability' }],
      difficulty: 'Beginner'
    },
    {
      id: 4,
      name: 'Lunges',
      description: 'A unilateral lower body exercise that enhances balance and leg strength.',
      image: 'assets/lunges.jpg',
      video: 'https://example.com/lunges-video',
      tags: [{ id: 2, name: 'Lower Body' }, { id: 5, name: 'Strength' }, { id: 6, name: 'Balance' }],
      difficulty: 'Intermediate'
    },
    {
      id: 5,
      name: 'Pull-up',
      description: 'An advanced upper body exercise that targets the back, biceps, and shoulders.',
      image: 'assets/pull-up.jpg',
      video: 'https://example.com/pull-up-video',
      tags: [{ id: 1, name: 'Upper Body' }, { id: 5, name: 'Strength' }],
      difficulty: 'Advanced'
    },
    {
      id: 6,
      name: 'Deadlift',
      description: 'A compound exercise that works multiple muscle groups, focusing on the lower back, glutes, and hamstrings.',
      image: 'assets/deadlift.jpg',
      video: 'https://example.com/deadlift-video',
      tags: [{ id: 2, name: 'Lower Body' }, { id: 5, name: 'Strength' }, { id: 7, name: 'Compound' }],
      difficulty: 'Intermediate'
    },
    {
      id: 7,
      name: 'Burpee',
      description: 'A full-body exercise that combines a squat, push-up, and jump, great for cardio and strength.',
      image: 'assets/burpee.jpg',
      video: 'https://example.com/burpee-video',
      tags: [{ id: 4, name: 'Full Body' }, { id: 8, name: 'Cardio' }, { id: 5, name: 'Strength' }],
      difficulty: 'Intermediate'
    },
    {
      id: 8,
      name: 'Russian Twist',
      description: 'A core exercise that targets the obliques and improves rotational strength.',
      image: 'assets/russian-twist.jpg',
      video: 'https://example.com/russian-twist-video',
      tags: [{ id: 3, name: 'Core' }, { id: 6, name: 'Stability' }],
      difficulty: 'Beginner'
    },
    {
      id: 9,
      name: 'Mountain Climbers',
      description: 'A dynamic exercise that works the core, improves cardiovascular fitness, and enhances coordination.',
      image: 'assets/mountain-climbers.jpg',
      video: 'https://example.com/mountain-climbers-video',
      tags: [{ id: 3, name: 'Core' }, { id: 8, name: 'Cardio' }, { id: 6, name: 'Coordination' }],
      difficulty: 'Intermediate'
    },
    {
      id: 10,
      name: 'Dips',
      description: 'An upper body exercise that targets the triceps, chest, and shoulders.',
      image: 'assets/dips.jpg',
      video: 'https://example.com/dips-video',
      tags: [{ id: 1, name: 'Upper Body' }, { id: 5, name: 'Strength' }],
      difficulty: 'Intermediate'
    },
    {
      id: 11,
      name: 'Bicycle Crunches',
      description: 'A dynamic core exercise that targets the abs and obliques while also engaging the hip flexors.',
      image: 'assets/bicycle-crunches.jpg',
      video: 'https://example.com/bicycle-crunches-video',
      tags: [{ id: 3, name: 'Core' }, { id: 6, name: 'Flexibility' }],
      difficulty: 'Beginner'
    },
    {
      id: 12,
      name: 'Jump Rope',
      description: 'A high-intensity cardio exercise that improves coordination and endurance.',
      image: 'assets/jump-rope.jpg',
      video: 'https://example.com/jump-rope-video',
      tags: [{ id: 8, name: 'Cardio' }, { id: 6, name: 'Coordination' }],
      difficulty: 'Beginner'
    },
    {
      id: 13,
      name: 'Kettlebell Swing',
      description: 'A dynamic exercise that targets the hips, glutes, and lower back while also providing a cardio workout.',
      image: 'assets/kettlebell-swing.jpg',
      video: 'https://example.com/kettlebell-swing-video',
      tags: [{ id: 2, name: 'Lower Body' }, { id: 5, name: 'Strength' }, { id: 8, name: 'Cardio' }],
      difficulty: 'Intermediate'
    },
    {
      id: 14,
      name: 'Box Jumps',
      description: 'A plyometric exercise that improves explosive power in the lower body.',
      image: 'assets/box-jumps.jpg',
      video: 'https://example.com/box-jumps-video',
      tags: [{ id: 2, name: 'Lower Body' }, { id: 9, name: 'Plyometrics' }],
      difficulty: 'Intermediate'
    },
    {
      id: 15,
      name: 'Face Pull',
      description: 'An upper body exercise that targets the rear deltoids and improves posture.',
      image: 'assets/face-pull.jpg',
      video: 'https://example.com/face-pull-video',
      tags: [{ id: 1, name: 'Upper Body' }, { id: 5, name: 'Strength' }, { id: 10, name: 'Posture' }],
      difficulty: 'Beginner'
    }
  ]);

  exercises = computed(() => this.exercisesSignal());

  getExerciseById(id: number) {
    return computed(() => this.exercises().find(exercise => exercise.id === id));
  }

  addExercise(exercise: Exercise) {
    this.exercisesSignal.update(exercises => {
      const newId = Math.max(...exercises.map(e => e.id), 0) + 1;
      return [...exercises, { ...exercise, id: newId }];
    });
  }

  updateExercise(updatedExercise: Exercise) {
    this.exercisesSignal.update(exercises =>
      exercises.map(exercise =>
        exercise.id === updatedExercise.id ? updatedExercise : exercise
      )
    );
  }
}