import {Session} from "./session.model";
import {Tag} from "./tag.model";

export interface Program {
  id: number;
  name: string;
  image: string;
  smallDescription: string;
  //markdownDescription;
  fullDescription: string;
  tags: Tag[];
  sessions: Session[];
}
export interface ProgramInstance extends Program {
  currentUsers: number;
  averageGains: number;
  startDate: Date;
  endDate?: Date;
}
