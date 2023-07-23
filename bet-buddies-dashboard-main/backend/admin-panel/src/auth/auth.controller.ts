import { Controller, Post, Body,Get } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { LoginDto } from "../dto/login.dto";


@Controller('login')
export class AuthController{
    constructor( private readonly authService: AuthService ){}


  
  @Post()
  login(@Body() loginDto: LoginDto): Promise <{token: string}>
  {
        return this.authService.login(loginDto)
  }

}