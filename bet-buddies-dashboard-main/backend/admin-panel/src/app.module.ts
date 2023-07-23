import { Module } from '@nestjs/common';
import {ConfigModule} from '@nestjs/config'
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UserDetailsModule } from './userDetails/userDetails.module';
import { AddPlatformModule } from './addPlatform/addPlatform.module';
import { AddCurrencyTokenModule } from './addToken/addCurrencyToken.module';



// const test = () => {
//   console.log(process.env.DB_URL)
//   return process.env.DB_URL;
// }


@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true
    }),
    MongooseModule.forRoot(process.env.DB_URL, {
      connectionName: 'adminDB'
    }),
    MongooseModule.forRoot(process.env.DB_URL2, {
      connectionName: 'bet-buddies'
    }),
    // QuestionListModule,
    AuthModule,
    UserDetailsModule,
    AddPlatformModule,
    AddCurrencyTokenModule
    // CurrencyModule

  ],
  controllers: [AppController],
  providers: [AppService],
  


})


export class AppModule {}




