/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { DataSetWhereInput } from "./DataSetWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class DataSetListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => DataSetWhereInput,
  })
  @ValidateNested()
  @Type(() => DataSetWhereInput)
  @IsOptional()
  @Field(() => DataSetWhereInput, {
    nullable: true,
  })
  every?: DataSetWhereInput;

  @ApiProperty({
    required: false,
    type: () => DataSetWhereInput,
  })
  @ValidateNested()
  @Type(() => DataSetWhereInput)
  @IsOptional()
  @Field(() => DataSetWhereInput, {
    nullable: true,
  })
  some?: DataSetWhereInput;

  @ApiProperty({
    required: false,
    type: () => DataSetWhereInput,
  })
  @ValidateNested()
  @Type(() => DataSetWhereInput)
  @IsOptional()
  @Field(() => DataSetWhereInput, {
    nullable: true,
  })
  none?: DataSetWhereInput;
}
export { DataSetListRelationFilter as DataSetListRelationFilter };
