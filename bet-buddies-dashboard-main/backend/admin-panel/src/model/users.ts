import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
enum SocialPlatform {
    GOOGLE = 'google',
    TELEGRAM = 'telegram',
    METAMASK = 'metamask',
    WALLETCONNECT = 'walletconnect'
}
@Schema({
    timestamps: true,
    
})
export class User {
    @Prop()
    fullName: string;

    @Prop({ unique: true, sparse: true })
    email: string;

    @Prop()
    password: string;

    @Prop()
    isSocialLogin: boolean;

    @Prop({ type: String, enum: SocialPlatform })
    socialPlatform: SocialPlatform;

    @Prop({ type: Object })
    google: Record<string, any>;

    @Prop({ type: Object })
    telegram: Record<string, any>;

    @Prop({ type: Object })
    metaMaskWalletConnect: Record<string, any>;
    
}
export const UserSchema = SchemaFactory.createForClass(User);









