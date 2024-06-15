import { ExcelFile as TExcelFile } from "../api/excelFile/ExcelFile";

export const EXCELFILE_TITLE_FIELD = "id";

export const ExcelFileTitle = (record: TExcelFile): string => {
  return record.id?.toString() || String(record.id);
};
