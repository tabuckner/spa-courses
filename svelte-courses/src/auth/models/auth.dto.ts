export interface UsernamePasswordDTO {
  username: string;
  password: string;
}

export interface StudentIDOnlyDTO {
  studentId: string; // NOTE: UUID
}

export type AuthDTO = UsernamePasswordDTO | StudentIDOnlyDTO;
