import { ClassModel as TClassModel } from "../api/classModel/ClassModel";

export const CLASSMODEL_TITLE_FIELD = "className";

export const ClassModelTitle = (record: TClassModel): string => {
  return record.className?.toString() || String(record.id);
};
