import { Body, Controller, Get, Post } from '@nestjs/common';
import { AddPlatformDto } from 'src/dto/addPlatform.dto';
import { AddPlatformService } from './addPlatform.service';

@Controller('add-platform')
export class AddPlatformController {

    constructor(private addPlatformService: AddPlatformService){}


    @Get()
    getPlatform(){
        

        return this.addPlatformService.getPlatform()

    }

    @Post()
    setPlatform(@Body() addPlatformDto: AddPlatformDto): Promise<any> {

        console.log("Inside add-platform controller");
        

        return this.addPlatformService.setPlatform(addPlatformDto);

    }

    
    

}
