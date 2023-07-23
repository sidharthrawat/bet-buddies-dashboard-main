import { IsEmail, IsNotEmpty, IsString, MinLength } from '@nestjs/class-validator'

export class DetailsDto{

    @IsNotEmpty()
    readonly name: string;

    @IsNotEmpty()
    @IsEmail({}, {message: 'Enter correct email'})
    readonly email: string;

    @IsNotEmpty()
    @IsString()
    @MinLength(8)
    readonly password: string;
    
}