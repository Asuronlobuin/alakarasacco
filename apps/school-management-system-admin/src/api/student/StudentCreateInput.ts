import { FeeCreateNestedManyWithoutStudentsInput } from "./FeeCreateNestedManyWithoutStudentsInput";

export type StudentCreateInput = {
  contactNumber?: string | null;
  dateOfBirth?: Date | null;
  email?: string | null;
  fees?: FeeCreateNestedManyWithoutStudentsInput;
  firstName?: string | null;
  lastName?: string | null;
};
