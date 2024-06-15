import { SortOrder } from "../../util/SortOrder";

export type ExcelFileOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
};
