
import {Schema, Prop, SchemaFactory} from '@nestjs/mongoose'
import mongoose from 'mongoose'
import { User } from '../users'

@Schema({
    timestamps: true
})

export class Withdrawal{

    @Prop({ref: User.name})
    fullName: mongoose.Types.ObjectId

    @Prop({required: true})
    amount: Number

    @Prop()
    reference: Number

    @Prop()
    currency: String


}
 export const WithdrawalSchema = SchemaFactory.createForClass(Withdrawal)