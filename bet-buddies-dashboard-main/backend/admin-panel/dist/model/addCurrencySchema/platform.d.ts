import mongoose from "mongoose";
export declare class Platform {
    code: number;
    name: String;
    description: String;
    website: String;
    releaseDate: Date;
    icon: String;
    isAvailable: boolean;
    isLocked: boolean;
    createdBy: mongoose.Types.ObjectId;
}
export declare const PlatformSchema: mongoose.Schema<Platform, mongoose.Model<Platform, any, any, any, mongoose.Document<unknown, any, Platform> & Omit<Platform & {
    _id: mongoose.Types.ObjectId;
}, never>, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, Platform, mongoose.Document<unknown, {}, mongoose.FlatRecord<Platform>> & Omit<mongoose.FlatRecord<Platform> & {
    _id: mongoose.Types.ObjectId;
}, never>>;
