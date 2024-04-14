import { IsNotEmpty, IsString } from "class-validator";
import { InputType, Field } from "@nestjs/graphql";

@InputType()
export class CategoryDto {
    @Field()
    @IsString()
    @IsNotEmpty()
    title: string
}