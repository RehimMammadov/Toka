import { Field, InputType } from "@nestjs/graphql";
import { IsNotEmpty, IsNumber, IsString } from "class-validator";

@InputType()
export class ProductsDto {
    @Field()
    @IsString()
    @IsNotEmpty()
    title: string

    @Field()
    @IsNumber()
    @IsNotEmpty()
    price: number

    @Field()
    images?: string[]
}