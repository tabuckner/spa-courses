import { simulateRequest } from "../../util/simulate-request"
import { MOCK_REGISTRATIONS } from "../mocks/registrations.mock"
import { currentStudentsRegistrations } from "../state/core.store"

const getStudentsRegistrations = (studentId: string) => {
  simulateRequest(() => {
    currentStudentsRegistrations.set(MOCK_REGISTRATIONS);
  })
}

const students = {
  getStudentsRegistrations,
};

export default students;
