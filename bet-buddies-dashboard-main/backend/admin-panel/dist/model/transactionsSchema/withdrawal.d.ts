import mongoose from 'mongoose';
export declare class Withdrawal {
    fullName: mongoose.Types.ObjectId;
    amount: Number;
    reference: Number;
    currency: String;
}
export declare const WithdrawalSchema: mongoose.Schema<Withdrawal, mongoose.Model<Withdrawal, any, any, any, mongoose.Document<unknown, any, Withdrawal> & Omit<Withdrawal & {
    _id: mongoose.Types.ObjectId;
}, never>, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, Withdrawal, mongoose.Document<unknown, {}, mongoose.FlatRecord<Withdrawal>> & Omit<mongoose.FlatRecord<Withdrawal> & {
    _id: mongoose.Types.ObjectId;
}, never>>;
