import { Field, InputType } from "@nestjs/graphql";
import { IsArray, IsNotEmpty, IsString } from "class-validator";

@InputType()
export class CreatorsDto {
    @Field()
    @IsString()
    @IsNotEmpty()
    fullName: string

    @Field()
    @IsString()
    email: string

    @Field(() => [String], { nullable: true })
    @IsArray()
    nft: string[]
}