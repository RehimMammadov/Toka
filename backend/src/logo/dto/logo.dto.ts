import { Field, InputType } from "@nestjs/graphql";
import { IsNotEmpty, IsString } from "class-validator";

@InputType()
export class LogoDto {
    @Field()
    @IsString()
    @IsNotEmpty()
    logo: string
}