import type { RegistrationModel } from "../models/registration.model";
import { MOCK_COURSES } from "./courses.mock";
import { MOCK_TERM } from "./term.mock";

export const MOCK_REGISTRATIONS: Array<RegistrationModel> = [
  {
    id: '6e257d90-5765-4d71-8243-d4a826a0cda6',
    course: MOCK_COURSES[0],
    term: MOCK_TERM[0], // NOTE: This term doesn't really make sense. But it's fake data, so w/e.
  },
];
