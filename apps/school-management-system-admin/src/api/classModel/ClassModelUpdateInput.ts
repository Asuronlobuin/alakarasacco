import { TeacherWhereUniqueInput } from "../teacher/TeacherWhereUniqueInput";

export type ClassModelUpdateInput = {
  className?: string | null;
  section?: string | null;
  teacher?: TeacherWhereUniqueInput | null;
};
