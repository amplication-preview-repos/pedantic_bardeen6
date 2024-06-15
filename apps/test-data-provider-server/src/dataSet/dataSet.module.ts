import { Module } from "@nestjs/common";
import { DataSetModuleBase } from "./base/dataSet.module.base";
import { DataSetService } from "./dataSet.service";
import { DataSetController } from "./dataSet.controller";
import { DataSetResolver } from "./dataSet.resolver";

@Module({
  imports: [DataSetModuleBase],
  controllers: [DataSetController],
  providers: [DataSetService, DataSetResolver],
  exports: [DataSetService],
})
export class DataSetModule {}
