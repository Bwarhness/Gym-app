import { ExerciseSession} from "./exercise.model";
import {Tag} from "./tag.model";

export interface Session {
  id: number;
  name: string;
  tags: Tag[];
  exercises: ExerciseSession[];
}

export interface SessionInstance extends Session {
  start: Date;
  end?: Date;
}
