import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { DataSetServiceBase } from "./base/dataSet.service.base";

@Injectable()
export class DataSetService extends DataSetServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
