import { simulateRequest } from "../../util/simulate-request";
import { MOCK_TERM } from "../mocks/term.mock";
import { currentTerm } from "../state/core.store";

const getCurrentTerm = () => {
  return simulateRequest(() => {
    currentTerm.set(MOCK_TERM);
  })

};

const term = {
  getCurrentTerm
};

export default term;