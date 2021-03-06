import { writable } from "svelte/store";
import type { CourseModel } from "../models/course.model";
import type { RegistrationModel } from "../models/registration.model";
import type { TermModel } from "../models/term.model";

export const currentTerm = writable<TermModel>(undefined);
export const currentTermsCourses = writable<Array<CourseModel>>(undefined);
export const currentStudentsRegistrations = writable<Array<RegistrationModel>>(undefined);
