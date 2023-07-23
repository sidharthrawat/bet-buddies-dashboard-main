
import { Injectable, UnauthorizedException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Platform } from "src/model/addCurrencySchema/platform";

@Injectable()
export class AddPlatformService {
    constructor(
        @InjectModel(Platform.name, 'bet-buddies') 
        private readonly addPlatformModel: Model<Platform>
    ){}

        
    async setPlatform(body): Promise<any> {

        console.log(body);

        const {name, description, icon} = body;

        const isPlatformAlreadyPresent = await this.addPlatformModel.findOne({ name });
        
        if (isPlatformAlreadyPresent) {
            return ('Platform already exists');
        }

        await this.addPlatformModel.create({
            name,
            description,
            icon,
        });

        return ('Succesful addition')

        
    }

    async getPlatform(): Promise<any>{
        return await this.addPlatformModel.find();
    }

 
}

