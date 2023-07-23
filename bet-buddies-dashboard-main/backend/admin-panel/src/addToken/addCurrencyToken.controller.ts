import { Body, Controller, Get, Param, Post } from '@nestjs/common';import { AddPlatformService } from 'src/addPlatform/addPlatform.service';
import { AddCurrencyTokenDto } from 'src/dto/addCurrencyToken.dto';
import { AddCurrencyTokenService } from './addCurrencyToken.service';
``


@Controller('add-currency')
export class AddCurrencyTokenController {

    constructor(private addCurrencyTokenService: AddCurrencyTokenService)
     {}


    @Get()
    getCurrencyToken(){
        return this.addCurrencyTokenService.getCurrencyToken();
    }

    @Post()
    setCurrencyToken(@Body() addCurrencyTokenDto: AddCurrencyTokenDto){
        
        return this.addCurrencyTokenService.setCurrencyToken(addCurrencyTokenDto)
    }

}
