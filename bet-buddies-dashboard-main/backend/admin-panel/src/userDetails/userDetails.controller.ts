import { Body, Controller, Get, Param, Post } from '@nestjs/common';``
import { UserDetailsService } from './userDetails.service';

@Controller('users')
export class UserDetailsController {

    constructor(private userDetailsService: UserDetailsService) {}


    @Get()
    getAllQuestions(){
        return this.userDetailsService.getAllUsers();
    }

}
