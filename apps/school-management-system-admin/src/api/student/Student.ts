import { Fee } from "../fee/Fee";

export type Student = {
  contactNumber: string | null;
  createdAt: Date;
  dateOfBirth: Date | null;
  email: string | null;
  fees?: Array<Fee>;
  firstName: string | null;
  id: string;
  lastName: string | null;
  updatedAt: Date;
};
