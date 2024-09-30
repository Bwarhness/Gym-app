export interface Program {
  id: number;
  name: string;
  image: string;
  level: string;
  smallDescription: string;
  fullDescription: string;
  sessions: Session[];
  tags: Tag[];
}
export interface Exercise {
  id: number;
  name: string;
  description: string;
  image: string;
  video: string;
  tags: Tag[];
}
export interface SessionExercise extends Exercise {
  sets?: number;
  reps?: number;
  tempo?: string;
}
export interface Tag {
  id: number;
  name: string;
}
export interface Session {
  name: string;
  id: number;
  exercises: SessionExercise[];
}
export interface WorkoutSession extends Session {
  start: Date;
  end?: Date;
}