import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { TeacherWhereUniqueInput } from "../teacher/TeacherWhereUniqueInput";

export type ClassModelWhereInput = {
  className?: StringNullableFilter;
  id?: StringFilter;
  section?: StringNullableFilter;
  teacher?: TeacherWhereUniqueInput;
};
