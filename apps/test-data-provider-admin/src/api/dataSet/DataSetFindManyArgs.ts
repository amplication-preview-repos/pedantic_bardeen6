import { DataSetWhereInput } from "./DataSetWhereInput";
import { DataSetOrderByInput } from "./DataSetOrderByInput";

export type DataSetFindManyArgs = {
  where?: DataSetWhereInput;
  orderBy?: Array<DataSetOrderByInput>;
  skip?: number;
  take?: number;
};
