import { IsEmail, IsNotEmpty, IsString, MinLength, IsDate, isNotEmpty, isString } from '@nestjs/class-validator'
import mongoose from 'mongoose';
import { Admin } from 'src/model/admin';
import { Url } from 'url';

export class AddPlatformDto{


    // @IsNotEmpty()
    // code: number

    @IsNotEmpty()
    @IsString()
    name: String;

    @IsNotEmpty()
    @IsString()
    description: string

    @IsNotEmpty()
    icon: string
    
}