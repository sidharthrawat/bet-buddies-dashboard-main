import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose from "mongoose";
import { OddType } from "./oddTypes";


@Schema({
    timestamps: true
})
export class Questions{
    @Prop({ref: OddType.name})
    type: mongoose.Types.ObjectId

    @Prop()
    title: String

    @Prop()
    matchId: Number
}

export const QuestionsSchema = SchemaFactory.createForClass(Questions);