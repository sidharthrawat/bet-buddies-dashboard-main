import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";
import mongoose from "mongoose";
import { Url } from "url";
import { Admin } from "../admin";
import { Platform } from "./platform";


@Schema({
    timestamps: true
})

export class CurrencyToken{
  
    @Prop({ref: Platform.name} ) // get required to true after dev
    platform: mongoose.Types.ObjectId;

    @Prop()
    key: Number

    @Prop({required: true})
    name: String

    @Prop()
    description: String

    @Prop()
    icon: String

    @Prop({default: false})
    isAvailable: boolean

    @Prop({default: false})
    isLocked: boolean

    @Prop()
    createdBy: Admin
}

export const CurrencyTokenSchema= SchemaFactory.createForClass(CurrencyToken);
