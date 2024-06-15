import { DataSet as TDataSet } from "../api/dataSet/DataSet";

export const DATASET_TITLE_FIELD = "id";

export const DataSetTitle = (record: TDataSet): string => {
  return record.id?.toString() || String(record.id);
};
