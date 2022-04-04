import { simulateRequest } from "../../util/simulate-request";
import { MOCK_USER } from "../mocks/user.mock";
import type { AuthDTO } from "../models/auth.dto";
import { isAuthenticated, currentUser } from "../state/auth.store";

const logIn = async (credentials: AuthDTO) => {
  console.info(`Logging in with ${JSON.stringify(credentials)}`);

  simulateRequest(() => {
    console.info('Logged in...');
    isAuthenticated.set(true);
    currentUser.set(MOCK_USER);
  })
}

const logOut = async () => {
  console.info('Logging out...');

  simulateRequest(() => {
    console.info('Logged out.')
    isAuthenticated.set(false);
    currentUser.set(undefined);
  });
}

const auth = {
  logIn,
  logOut
};

export default auth;
