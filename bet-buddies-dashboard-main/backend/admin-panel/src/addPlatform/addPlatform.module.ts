import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PlatformSchema } from 'src/model/addCurrencySchema/platform';
import { AddPlatformService } from './addPlatform.service';
import { AddPlatformController } from './addPlatform.controller';





@Module({
  imports: [MongooseModule.forFeature([{name:'Platform', schema: PlatformSchema}], 'bet-buddies')],
  controllers: [AddPlatformController],
  providers: [AddPlatformService]
})

export class AddPlatformModule {}