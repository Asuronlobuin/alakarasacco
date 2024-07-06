import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { FeeListRelationFilter } from "../fee/FeeListRelationFilter";
import { StringFilter } from "../../util/StringFilter";

export type StudentWhereInput = {
  contactNumber?: StringNullableFilter;
  dateOfBirth?: DateTimeNullableFilter;
  email?: StringNullableFilter;
  fees?: FeeListRelationFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
};
