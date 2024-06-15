import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { DataSetService } from "./dataSet.service";
import { DataSetControllerBase } from "./base/dataSet.controller.base";

@swagger.ApiTags("dataSets")
@common.Controller("dataSets")
export class DataSetController extends DataSetControllerBase {
  constructor(protected readonly service: DataSetService) {
    super(service);
  }
}
