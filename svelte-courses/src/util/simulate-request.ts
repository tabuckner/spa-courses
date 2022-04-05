import { get } from "svelte/store";
import { authToken } from "../auth/state/auth.store";

export const simulateRequest = <T>(functionToBeWrapped: () => T, delayTimeInMs = 200): Promise<T> => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      // TODO: Find a more performant approach. Not recommended for "hot" code paths.
      const token = get(authToken);
      // Add token to `Bearer` of request

      res(functionToBeWrapped())
    }, delayTimeInMs);
  });
}
  