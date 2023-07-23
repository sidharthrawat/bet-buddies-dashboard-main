import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";


@Schema({
    timestamps: true
})

export class Admin{
  
    @Prop({ unique: true, sparse: true})
    email: String

    @Prop()
    password: String
   
}

export const AdminSchema= SchemaFactory.createForClass(Admin);
