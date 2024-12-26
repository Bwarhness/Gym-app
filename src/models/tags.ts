
//Tags
//tags are used to categorize
//tag should always be visialized as a chip in the UI
export interface Tag {
  id: string;
  name: string;
}

export type Tags = Tag[];

export const mockTags: Tags = [
  // Training styles
  { id: 'bodybuilding', name: 'Bodybuilding' },
  { id: 'powerlifting', name: 'Powerlifting' },
  { id: 'strength', name: 'Strength Training' },
  { id: 'hypertrophy', name: 'Hypertrophy' },
  
  // Exercise types
  { id: 'compound', name: 'Compound' },
  { id: 'isolation', name: 'Isolation' },
  { id: 'push', name: 'Push' },
  { id: 'pull', name: 'Pull' },
  { id: 'legs', name: 'Legs' },
  
  // Upper body muscles
  { id: 'chest', name: 'Chest' },
  { id: 'triceps', name: 'Triceps' },
  { id: 'biceps', name: 'Biceps' },
  { id: 'shoulders', name: 'Shoulders' },
  { id: 'delts', name: 'Deltoids' },
  { id: 'traps', name: 'Trapezius' },
  { id: 'back', name: 'Back' },
  { id: 'lats', name: 'Lats' },
  
  // Lower body muscles
  { id: 'quads', name: 'Quadriceps' },
  { id: 'hamstrings', name: 'Hamstrings' },
  { id: 'calves', name: 'Calves' },
  { id: 'glutes', name: 'Glutes' },
  
  // Core
  { id: 'abs', name: 'Abs' },
  { id: 'core', name: 'Core' },
  
  // Equipment
  { id: 'barbell', name: 'Barbell' },
  { id: 'dumbbell', name: 'Dumbbell' },
  { id: 'machine', name: 'Machine' },
  { id: 'bodyweight', name: 'Bodyweight' },
  { id: 'cables', name: 'Cables' },
  
  // Movement patterns
  { id: 'squat', name: 'Squat' },
  { id: 'deadlift', name: 'Deadlift' },
  { id: 'press', name: 'Press' },
  { id: 'row', name: 'Row' }
];