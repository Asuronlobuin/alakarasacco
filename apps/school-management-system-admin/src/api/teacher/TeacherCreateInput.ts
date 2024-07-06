import { ClassModelCreateNestedManyWithoutTeachersInput } from "./ClassModelCreateNestedManyWithoutTeachersInput";

export type TeacherCreateInput = {
  classes?: ClassModelCreateNestedManyWithoutTeachersInput;
  contactNumber?: string | null;
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
};
