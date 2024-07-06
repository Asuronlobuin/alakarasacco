import { ClassModel } from "../classModel/ClassModel";

export type Teacher = {
  classes?: Array<ClassModel>;
  contactNumber: string | null;
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  updatedAt: Date;
};
