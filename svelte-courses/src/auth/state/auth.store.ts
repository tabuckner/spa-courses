import { writable } from "svelte/store";
import { MOCK_USER } from "../mocks/user.mock";
import type { UserModel } from "../models/user.model";

// export const isAuthenticated = writable(false);
// export const currentUser = writable<UserModel>(null);

export const isAuthenticated = writable(true);
export const currentUser = writable<UserModel>(MOCK_USER);
