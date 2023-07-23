// import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";
// import mongoose from "mongoose";
// import { Admin } from "../admin";
// import { Platform } from "./platform";


// @Schema({
//     timestamps: true
// })

// export class CurrencyToken{
  
//     // @Prop({required: true })
//     // platform: String

//     @Prop()
//     key: Number

//     @Prop({required: true})
//     name: String

//     @Prop()
//     description: String

//     @Prop()
//     icon: String

//     @Prop({default: false})
//     isAvailable: boolean

//     @Prop({default: false})
//     isLocked: boolean

//     @Prop()
//     createdBy: Admin
// }

// export const CurrencyTokenSchema= SchemaFactory.createForClass(CurrencyToken);

import {Schema, Prop, SchemaFactory} from '@nestjs/mongoose'
import mongoose from 'mongoose'
import { User } from '../users'

@Schema({
    timestamps: true
})

export class Transactions{

    @Prop({ref: User.name})
    fullName: mongoose.Types.ObjectId

    @Prop({required: true})
    amount: Number

    @Prop()
    currency: String

    @Prop()
    action: String
    // whether transaction type is withdrawl or deposit

}
 export const TransactionsSchema = SchemaFactory.createForClass(Transactions)