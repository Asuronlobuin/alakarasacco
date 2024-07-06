import { Teacher } from "../teacher/Teacher";

export type ClassModel = {
  className: string | null;
  createdAt: Date;
  id: string;
  section: string | null;
  teacher?: Teacher | null;
  updatedAt: Date;
};
