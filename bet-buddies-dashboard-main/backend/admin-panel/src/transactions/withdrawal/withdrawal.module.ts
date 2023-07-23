import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CurrencyTokenSchema } from 'src/model/addCurrencySchema/currencyToken';
import { TransactionsSchema } from 'src/model/transactionsSchema/transactions';





@Module({
  imports: [MongooseModule.forFeature([{name:'Withdrawal', schema: TransactionsSchema}], 'bet-buddies')],
  controllers: [],
  providers: []
})
export class AddCurrencyTokenModule {}