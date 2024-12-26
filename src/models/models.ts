export interface Exercise {
  id: string;
  name: string;
  description?: string;
}

export interface SessionExercise extends Exercise {
  sets?: number;
  reps?: number;
  image?: string;
  video?: string;
  tags?: string[];
  tempo?: string;
  weight?: number;
}

export interface Session {
  id: string;
  name: string;
  tags: {id: number, name: string}[];
  exercises: SessionExercise[];
}

export interface WorkoutSession extends Session {
  date: Date;
  completed: boolean;
} 