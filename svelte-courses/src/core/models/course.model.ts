export interface CourseModel {
  id: string; // NOTE: UUID
  name: string;
  prerequisites: Array<CourseModel>; // NOTE: UUIDs
}
