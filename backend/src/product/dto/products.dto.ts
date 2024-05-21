import { Field, InputType } from "@nestjs/graphql";
import { IsArray, IsNotEmpty, IsNumber, IsString } from "class-validator";

@InputType()
export class ProductsDto {
  @Field()
  @IsNotEmpty()
  @IsString()
  title: string;

  @Field()
  @IsNotEmpty()
  @IsNumber()
  price: number;

  @Field(() => [String])
  @IsNotEmpty()
  @IsArray()
  @IsString({ each: true })
  images: string[];
}