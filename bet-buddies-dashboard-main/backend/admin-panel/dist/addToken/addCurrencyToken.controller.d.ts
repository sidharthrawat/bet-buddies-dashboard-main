import { AddCurrencyTokenDto } from 'src/dto/addCurrencyToken.dto';
import { AddCurrencyTokenService } from './addCurrencyToken.service';
export declare class AddCurrencyTokenController {
    private addCurrencyTokenService;
    constructor(addCurrencyTokenService: AddCurrencyTokenService);
    getCurrencyToken(): Promise<any>;
    setCurrencyToken(addCurrencyTokenDto: AddCurrencyTokenDto): Promise<any>;
}
