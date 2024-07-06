import { ClassModelUpdateManyWithoutTeachersInput } from "./ClassModelUpdateManyWithoutTeachersInput";

export type TeacherUpdateInput = {
  classes?: ClassModelUpdateManyWithoutTeachersInput;
  contactNumber?: string | null;
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
};
