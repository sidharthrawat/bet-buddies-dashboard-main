import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";


@Schema({
    timestamps: true,
})

export class OddType{
    @Prop()
    title: string
}
export const OddTypeSchmea = SchemaFactory.createForClass(OddType);