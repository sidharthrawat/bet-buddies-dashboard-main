import { Body, Controller, Get, Param, Post } from '@nestjs/common';import { AddPlatformService } from 'src/addPlatform/addPlatform.service';
import { AddCurrencyTokenDto } from 'src/dto/addCurrencyToken.dto';
import { DespositService } from './deposit.service';
``


@Controller('deposits')
export class DepositController {

    constructor(private depositService: DespositService )
     {}


    @Get()
    getCurrencyToken(){
        return this.depositService.getDeposits();
    }

    // @Post()
    // setCurrencyToken(@Body() addCurrencyTokenDto: AddCurrencyTokenDto){
    //     return this.addCurrencyTokenService.setCurrencyToken(addCurrencyTokenDto)
    // }

}
