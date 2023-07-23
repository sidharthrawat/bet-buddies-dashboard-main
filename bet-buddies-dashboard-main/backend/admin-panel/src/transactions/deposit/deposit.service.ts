
import { Injectable, UnauthorizedException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Deposit } from "src/model/transactionsSchema/deposit";

@Injectable()
export class DespositService {
    constructor(
        @InjectModel(Deposit.name, 'bet-buddies')
        private depositModel: Model<Deposit>,
    ){}
    

    async getDeposits(): Promise<any>{
        return await this.depositModel.find();
    }
 

 
}

