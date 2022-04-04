import { writable } from "svelte/store";
import type { TermModel } from "../models/term.model";

export const currentTerm = writable<TermModel>(undefined);
