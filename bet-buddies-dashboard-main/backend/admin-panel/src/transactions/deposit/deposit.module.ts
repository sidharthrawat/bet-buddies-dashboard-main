import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CurrencyTokenSchema } from 'src/model/addCurrencySchema/currencyToken';
import { DepositController } from './deposit.controller';
import { DespositService } from './deposit.service';





@Module({
  imports: [MongooseModule.forFeature([{name:'CurrencyToken', schema: CurrencyTokenSchema}], 'bet-buddies')],
  controllers: [DepositController],
  providers: [DespositService]
})
export class AddCurrencyTokenModule {}