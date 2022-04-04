import type { RegistrationModel } from "../models/registration.model";
import { MOCK_COURSES } from "./courses.mock";
import { MOCK_PREVIOUS_TERM } from "./term.mock";

export const MOCK_REGISTRATIONS: Array<RegistrationModel> = [
  {
    id: '6e257d90-5765-4d71-8243-d4a826a0cda6',
    course: MOCK_COURSES[0], // NOTE: COLLEGE 101
    term: MOCK_PREVIOUS_TERM, // NOTE: Taking liberty here. Would need to be able to determine what courses were passed in the past for a real app. 
  },
];
