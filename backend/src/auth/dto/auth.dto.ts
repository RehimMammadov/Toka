import { IsString, IsNotEmpty, IsEmail, MinLength, IsNumber, IsOptional } from "class-validator";

export class AuthDto {
    @IsOptional()
    @IsString()
    firstName: string

    @IsString()
    @IsOptional()
    lastName: string

    @IsString()
    @IsOptional()
    username: string

    @IsNumber()
    @IsOptional()
    age: number

    @IsEmail()
    email: string

    @MinLength(8, { message: "Password must be at least 8 characters" })
    password: string
}