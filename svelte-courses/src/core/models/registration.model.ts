import type { CourseModel } from "./course.model";
import type { TermModel } from "./term.model";

export interface RegistrationModel {
  id: string; // NOTE: UUID
  course: CourseModel;
  term: TermModel;
}
