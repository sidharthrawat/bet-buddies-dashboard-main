import { Module } from "@nestjs/common";
import { AuthController } from "./auth.controller";
import { MongooseModule } from "@nestjs/mongoose";
import { AdminSchema } from "src/model/admin";
import { AuthService } from "./auth.service";
import { PassportModule } from "@nestjs/passport";
import { JwtModule } from "@nestjs/jwt";
import { ConfigService } from "@nestjs/config";


@Module({
    imports: [
        PassportModule.register({ defaultStrategy: 'jwt' }),
        JwtModule.registerAsync({
            inject: [ConfigService],
            useFactory: (config: ConfigService) =>{
                return {
                    secret: config.get<string>('JWT_SECRET'),
                    signOptions: {
                        expiresIn: config.get<string>('JWT_EXPIRE')
                    }
                }
            }
        }),

        MongooseModule.forFeature([{ name: 'Admin', schema: AdminSchema }], 'adminDB')
    ],
    controllers: [AuthController],
    providers: [AuthService],
})

export class AuthModule {}