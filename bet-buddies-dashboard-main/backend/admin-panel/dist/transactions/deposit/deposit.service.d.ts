import { Model } from "mongoose";
import { Deposit } from "src/model/transactionsSchema/deposit";
export declare class DespositService {
    private depositModel;
    constructor(depositModel: Model<Deposit>);
    getDeposits(): Promise<any>;
}
