import mongoose from "mongoose";
import { Admin } from "../admin";
export declare class CurrencyToken {
    platform: mongoose.Types.ObjectId;
    key: Number;
    name: String;
    description: String;
    icon: String;
    isAvailable: boolean;
    isLocked: boolean;
    createdBy: Admin;
}
export declare const CurrencyTokenSchema: mongoose.Schema<CurrencyToken, mongoose.Model<CurrencyToken, any, any, any, mongoose.Document<unknown, any, CurrencyToken> & Omit<CurrencyToken & {
    _id: mongoose.Types.ObjectId;
}, never>, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, CurrencyToken, mongoose.Document<unknown, {}, mongoose.FlatRecord<CurrencyToken>> & Omit<mongoose.FlatRecord<CurrencyToken> & {
    _id: mongoose.Types.ObjectId;
}, never>>;
