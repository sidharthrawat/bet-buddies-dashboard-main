import mongoose from 'mongoose';
export declare class Deposit {
    fullName: mongoose.Types.ObjectId;
    reference: Number;
    amount: Number;
    status: String;
}
export declare const DepositSchema: mongoose.Schema<Deposit, mongoose.Model<Deposit, any, any, any, mongoose.Document<unknown, any, Deposit> & Omit<Deposit & {
    _id: mongoose.Types.ObjectId;
}, never>, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, Deposit, mongoose.Document<unknown, {}, mongoose.FlatRecord<Deposit>> & Omit<mongoose.FlatRecord<Deposit> & {
    _id: mongoose.Types.ObjectId;
}, never>>;
