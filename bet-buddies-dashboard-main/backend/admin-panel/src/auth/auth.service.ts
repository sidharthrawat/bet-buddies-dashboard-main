
import { Injectable, UnauthorizedException } from "@nestjs/common";
import * as bcrypt from 'bcryptjs';
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Admin } from "src/model/admin";
import { LoginDto } from "../dto/login.dto";
import { JwtService } from "@nestjs/jwt";

@Injectable()
export class AuthService {
    constructor(
        @InjectModel(Admin.name, 'adminDB')
        private adminModel: Model<Admin>,
        private jwtService:  JwtService
    ){}

    async details(DetailsDto:any){


        const {name, email, password} = DetailsDto;

        const hashedPassword= await bcrypt.hash(password, 10)

        const admin= await this.adminModel.updateOne({
            password: hashedPassword
        })

        console.log(name, email, hashedPassword, admin);

    }
 

    async login(loginDto: LoginDto): Promise<{ token: string }> {

        const {email, password}= loginDto;

       

        const admin= await this.adminModel.findOne({email});
        console.log(admin);

        // const hashedPassword= await bcrypt.hash(password, 10);
        // console.log("Hashed Password: " + hashedPassword);

        const isPasswordMatched= await bcrypt.compare(password, admin.password);
        
     
        if(!admin){
            throw new UnauthorizedException('Enter correct admin account details');
            
        }
        
        else if(!isPasswordMatched){
            throw new UnauthorizedException('Please enter the correct password')
        }

        else{
            const token = this.jwtService.sign({ id: admin._id });

            console.log("Token id:  "+ token)
    
            return { token }
        }
       


    }
 
}

