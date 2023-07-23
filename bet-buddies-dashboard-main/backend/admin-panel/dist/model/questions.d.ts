import mongoose from "mongoose";
export declare class Questions {
    type: mongoose.Types.ObjectId;
    title: String;
    matchId: Number;
}
export declare const QuestionsSchema: mongoose.Schema<Questions, mongoose.Model<Questions, any, any, any, mongoose.Document<unknown, any, Questions> & Omit<Questions & {
    _id: mongoose.Types.ObjectId;
}, never>, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, Questions, mongoose.Document<unknown, {}, mongoose.FlatRecord<Questions>> & Omit<mongoose.FlatRecord<Questions> & {
    _id: mongoose.Types.ObjectId;
}, never>>;
