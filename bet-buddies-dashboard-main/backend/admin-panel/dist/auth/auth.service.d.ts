import { Model } from "mongoose";
import { Admin } from "src/model/admin";
import { LoginDto } from "../dto/login.dto";
import { JwtService } from "@nestjs/jwt";
export declare class AuthService {
    private adminModel;
    private jwtService;
    constructor(adminModel: Model<Admin>, jwtService: JwtService);
    details(DetailsDto: any): Promise<void>;
    login(loginDto: LoginDto): Promise<{
        token: string;
    }>;
}
