import { Tags } from "./tags";

export interface Exercise {
  id: string;
  name: string;
  description?: string;
  tags?: Tags;
}

export interface SessionExercise extends Exercise {
  sets?: number;
  reps?: number;
  weight?: number;
}