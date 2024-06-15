import * as graphql from "@nestjs/graphql";
import { DataSetResolverBase } from "./base/dataSet.resolver.base";
import { DataSet } from "./base/DataSet";
import { DataSetService } from "./dataSet.service";

@graphql.Resolver(() => DataSet)
export class DataSetResolver extends DataSetResolverBase {
  constructor(protected readonly service: DataSetService) {
    super(service);
  }
}
