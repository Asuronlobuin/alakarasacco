import { StudentWhereUniqueInput } from "../student/StudentWhereUniqueInput";

export type FeeCreateInput = {
  amount?: number | null;
  dueDate?: Date | null;
  status?: "Option1" | null;
  student?: StudentWhereUniqueInput | null;
};
