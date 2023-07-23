import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";
import mongoose from "mongoose";
import { Url } from "url";
import { Admin } from "../admin";

@Schema({
    timestamps: true
})

export class Platform{
  
    @Prop()
    code: number

    @Prop({required: true})
    name: String

    @Prop()
    description: String

    @Prop()
    website: String

    @Prop()
    releaseDate: Date

    @Prop()
    icon: String

    @Prop({default: false})
    isAvailable: boolean

    @Prop({default: false})
    isLocked: boolean
    
    @Prop({ref: Admin.name })
    createdBy: mongoose.Types.ObjectId
}

export const PlatformSchema= SchemaFactory.createForClass(Platform);
