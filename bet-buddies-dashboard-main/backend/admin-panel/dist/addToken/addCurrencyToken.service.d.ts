import { Model } from "mongoose";
import { CurrencyToken } from "src/model/addCurrencySchema/currencyToken";
export declare class AddCurrencyTokenService {
    private addCurrencyTokenModel;
    constructor(addCurrencyTokenModel: Model<CurrencyToken>);
    setCurrencyToken(body: any): Promise<any>;
    getCurrencyToken(): Promise<any>;
}
