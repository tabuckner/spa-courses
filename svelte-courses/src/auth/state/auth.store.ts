import { writable } from "svelte/store";
import { MOCK_AUTH_TOKEN } from "../mocks/token.mock";
import { MOCK_USER } from "../mocks/user.mock";
import type { UserModel } from "../models/user.model";

export const isAuthenticated = writable(false);
export const authToken = writable(undefined);
export const currentUser = writable<UserModel>(undefined);

// export const isAuthenticated = writable(true);
// export const authToken = writable(MOCK_AUTH_TOKEN);
// export const currentUser = writable<UserModel>(MOCK_USER);
