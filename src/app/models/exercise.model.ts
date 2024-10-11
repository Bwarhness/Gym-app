import {Tag} from "./tag.model";

export interface Exercise {
  id: number;
  name: string;
  description: string;
  image: string;
  video: string;
  tags: Tag[];
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
}

export interface ExerciseSession extends Exercise {
  sets?: Set[];

}
export interface ExerciseSessionInstance extends ExerciseSession {
  id: number;
}
export interface Set {
  reps?: number;
  weight?: number;
  tempo?: string;
}
