
import { Injectable, UnauthorizedException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { CurrencyToken } from "src/model/addCurrencySchema/currencyToken";
import { AddPlatformService } from "src/addPlatform/addPlatform.service";
import { Platform } from "src/model/addCurrencySchema/platform";

@Injectable()
export class AddCurrencyTokenService {
    constructor(
        @InjectModel(CurrencyToken.name, 'bet-buddies')
        private addCurrencyTokenModel: Model<CurrencyToken>,
    ){}


        async setCurrencyToken(body): Promise<any>{

            const {platform, name, description} = body;
            
            console.log(body);

            const isCurrencyAlreadyPresent = await this.addCurrencyTokenModel.findOne({name})
            // const isPlatformAlreadyPresent = await this.addCurrencyTokenModel.findOne({platform});

            

            if(isCurrencyAlreadyPresent){
                return ('Currency Already Present')
            }
            
            else{
                await this.addCurrencyTokenModel.create({

                    platform,
                    name,
                    description,
        
                })

            
            if(!name || !description || !platform){
                return ('Error occured, please enter the correct details')
            }
            else{
                return ('Currency Token added successfully to the DB')
            }

            }
    
               
    

    }
    

    async getCurrencyToken(): Promise<any>{
        return await this.addCurrencyTokenModel.find();
    }
 

 
}

