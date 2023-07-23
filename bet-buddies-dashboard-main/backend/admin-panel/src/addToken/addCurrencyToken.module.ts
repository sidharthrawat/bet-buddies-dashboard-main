import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CurrencyTokenSchema } from 'src/model/addCurrencySchema/currencyToken';
import { AddCurrencyTokenController } from './addCurrencyToken.controller';
import { AddCurrencyTokenService } from './addCurrencyToken.service';





@Module({
  imports: [MongooseModule.forFeature([{name:'CurrencyToken', schema: CurrencyTokenSchema}], 'bet-buddies')],
  controllers: [AddCurrencyTokenController],
  providers: [AddCurrencyTokenService]
})
export class AddCurrencyTokenModule {}