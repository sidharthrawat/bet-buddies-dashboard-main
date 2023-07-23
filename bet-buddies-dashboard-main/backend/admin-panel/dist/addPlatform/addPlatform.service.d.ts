import { Model } from "mongoose";
import { Platform } from "src/model/addCurrencySchema/platform";
export declare class AddPlatformService {
    private readonly addPlatformModel;
    constructor(addPlatformModel: Model<Platform>);
    setPlatform(body: any): Promise<any>;
    getPlatform(): Promise<any>;
}
