/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { DataSetWhereInput } from "./DataSetWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { DataSetOrderByInput } from "./DataSetOrderByInput";

@ArgsType()
class DataSetFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => DataSetWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => DataSetWhereInput, { nullable: true })
  @Type(() => DataSetWhereInput)
  where?: DataSetWhereInput;

  @ApiProperty({
    required: false,
    type: [DataSetOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [DataSetOrderByInput], { nullable: true })
  @Type(() => DataSetOrderByInput)
  orderBy?: Array<DataSetOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { DataSetFindManyArgs as DataSetFindManyArgs };
