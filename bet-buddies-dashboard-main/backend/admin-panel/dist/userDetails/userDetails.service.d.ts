import { User } from 'src/model/users';
import { Model } from 'mongoose';
export declare class UserDetailsService {
    private readonly userModel;
    constructor(userModel: Model<User>);
    getAllUsers(): Promise<any>;
}
