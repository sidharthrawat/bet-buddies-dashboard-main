import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { UserSchema } from 'src/model/users';
import { UserDetailsController } from './userDetails.controller';
import { UserDetailsService } from './userDetails.service';



@Module({
  imports: [MongooseModule.forFeature([{name:'User', schema: UserSchema}], 'bet-buddies')],
  controllers: [UserDetailsController],
  providers: [UserDetailsService]
})
export class UserDetailsModule {}