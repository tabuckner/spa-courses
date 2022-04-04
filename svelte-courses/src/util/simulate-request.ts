export const simulateRequest = <T>(functionToBeWrapped: () => T, delayTimeInMs = 200): Promise<T> => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(functionToBeWrapped())
    }, delayTimeInMs);
  });
}