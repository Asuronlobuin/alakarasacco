import { FeeUpdateManyWithoutStudentsInput } from "./FeeUpdateManyWithoutStudentsInput";

export type StudentUpdateInput = {
  contactNumber?: string | null;
  dateOfBirth?: Date | null;
  email?: string | null;
  fees?: FeeUpdateManyWithoutStudentsInput;
  firstName?: string | null;
  lastName?: string | null;
};
