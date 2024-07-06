import { TeacherWhereUniqueInput } from "../teacher/TeacherWhereUniqueInput";

export type ClassModelCreateInput = {
  className?: string | null;
  section?: string | null;
  teacher?: TeacherWhereUniqueInput | null;
};
