import { debug } from "svelte/internal"
import { simulateRequest } from "../../util/simulate-request"
import { MOCK_REGISTRATIONS } from "../mocks/registrations.mock"
import type { CourseModel } from "../models/course.model"
import type { RegistrationModel } from "../models/registration.model"
import { currentStudentsRegistrations } from "../state/core.store"

const getStudentsRegistrations = async (studentId: string) => {
  simulateRequest(() => {
    currentStudentsRegistrations.set(MOCK_REGISTRATIONS);
  })
}

const hasCompletedAllPrerequisites = async ({ prerequisites }: CourseModel): Promise<boolean> => {
  return new Promise((res) => {
    let allPrerequisitesCompleted = true;

    if (prerequisites.length < 1) {
      return res(allPrerequisitesCompleted);
    }

    // NOTE: This is not _really_ possible w/ current data model. Need to know if they passed/failed.
    currentStudentsRegistrations.subscribe(registrations => {
      const previouslyCompletedCourses = getPreviouslyCompletedCourses(registrations);

      const prerequisiteCompletedList = prerequisites.map(prerequisite => {
        return previouslyCompletedCourses.findIndex((completedCourse) => completedCourse.id === prerequisite.id) > -1;
      });

      allPrerequisitesCompleted = prerequisiteCompletedList.indexOf(false) < 0;
    })();

    return res(allPrerequisitesCompleted);
  });
}

const isPrerequisiteSatisfied = (prerequisite: CourseModel): Promise<boolean> => {
  return new Promise(res => {
    currentStudentsRegistrations.subscribe(registrations => {
      const previouslyCompletedCourses = getPreviouslyCompletedCourses(registrations);

      return res(previouslyCompletedCourses.findIndex((completedCourse) => completedCourse.id === prerequisite.id) > -1);
    })();
  });
}

const getPreviouslyCompletedCourses = (registrations: Array<RegistrationModel>): Array<CourseModel> => {
  return registrations.filter(registration => new Date(registration.term.endDate).getTime() <= new Date().getTime()).map(registration => registration.course);
}

const students = {
  getStudentsRegistrations,
  hasCompletedAllPrerequisites,
  isPrerequisiteSatisfied,
};

export default students;
