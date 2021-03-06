import type { TermModel } from "../models/term.model";

const date = new Date();

export const MOCK_TERM: TermModel = {
  id: '5437870e-eae8-4c3a-aa5f-fda9821eaf2e',
  startDate: new Date().toLocaleDateString(), // NOTE: TODAY
  endDate: new Date(new Date().setDate(new Date().getDate() + 90)).toLocaleDateString(),
}

export const MOCK_PREVIOUS_TERM: TermModel = {
  id: '5437870e-eae8-4c3a-aa5f-fda9821eaf2e',
  startDate: new Date(new Date().setDate(new Date().getDate() - 90)).toLocaleDateString(),
  endDate: new Date(new Date().setDate(new Date().getDate() - 15)).toLocaleDateString(),
}
