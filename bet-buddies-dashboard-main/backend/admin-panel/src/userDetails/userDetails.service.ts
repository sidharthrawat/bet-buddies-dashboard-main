import { Injectable } from '@nestjs/common';
import { User } from 'src/model/users';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class UserDetailsService {

    constructor(@InjectModel(User.name, 'bet-buddies')
    
        private readonly userModel: Model<User>) {}


    async getAllUsers():Promise<any>{

        const users =  await this.userModel.find({}, {fullName:1});
        console.log(users);
        return users;


     

    }

   
}
