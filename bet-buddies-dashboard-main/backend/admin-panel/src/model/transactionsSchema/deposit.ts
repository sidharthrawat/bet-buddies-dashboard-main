import {Schema, Prop, SchemaFactory} from '@nestjs/mongoose'
import mongoose from 'mongoose'
import { User } from '../users'

@Schema({
    timestamps: true
})

export class Deposit{

    @Prop({ref: User.name})
    fullName: mongoose.Types.ObjectId

    @Prop()
    reference: Number

    @Prop({required: true})
    amount: Number

    @Prop()
    status: String

    

}
 export const DepositSchema = SchemaFactory.createForClass(Deposit)