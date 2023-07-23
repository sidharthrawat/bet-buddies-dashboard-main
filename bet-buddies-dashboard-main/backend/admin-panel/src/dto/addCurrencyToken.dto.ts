import { IsEmail, IsNotEmpty, IsString, MinLength, IsDate, isNotEmpty } from '@nestjs/class-validator'
import { Platform } from 'src/model/addCurrencySchema/platform';

export class AddCurrencyTokenDto{

    @IsNotEmpty()
    platform: String

    @IsNotEmpty()
    name: String;

    @IsNotEmpty()
    description: String

    @IsNotEmpty()
    icon: String

    @IsNotEmpty()
    @IsDate()
    public releaseDate: Date
    
}