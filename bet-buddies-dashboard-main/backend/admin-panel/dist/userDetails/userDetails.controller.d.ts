import { UserDetailsService } from './userDetails.service';
export declare class UserDetailsController {
    private userDetailsService;
    constructor(userDetailsService: UserDetailsService);
    getAllQuestions(): Promise<any>;
}
