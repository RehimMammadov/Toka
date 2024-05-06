import { Field, InputType } from "@nestjs/graphql";
import { IsNotEmpty, IsString } from "class-validator";

@InputType()
export class TestimonialsDto {
    @Field()
    @IsString()
    @IsNotEmpty()
    fullname: string

    @Field()
    @IsString()
    @IsNotEmpty()
    vocation: string

    @Field()
    @IsString()
    @IsNotEmpty()
    avatar: string

    @Field()
    @IsString()
    @IsNotEmpty()
    comment: string
}