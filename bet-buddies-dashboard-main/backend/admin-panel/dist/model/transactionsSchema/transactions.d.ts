import mongoose from 'mongoose';
export declare class Transactions {
    fullName: mongoose.Types.ObjectId;
    amount: Number;
    currency: String;
    action: String;
}
export declare const TransactionsSchema: mongoose.Schema<Transactions, mongoose.Model<Transactions, any, any, any, mongoose.Document<unknown, any, Transactions> & Omit<Transactions & {
    _id: mongoose.Types.ObjectId;
}, never>, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, Transactions, mongoose.Document<unknown, {}, mongoose.FlatRecord<Transactions>> & Omit<mongoose.FlatRecord<Transactions> & {
    _id: mongoose.Types.ObjectId;
}, never>>;
