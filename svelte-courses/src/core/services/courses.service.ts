import { simulateRequest } from "../../util/simulate-request"
import { MOCK_COURSES } from "../mocks/courses.mock"
import { currentTermsCourses } from "../state/core.store";

const getCurrentTermsCourses = (termId: string) => {
  simulateRequest(() => {
    currentTermsCourses.set(MOCK_COURSES);
  });
}

const courses = {
  getCurrentTermsCourses,
}

export default courses;
