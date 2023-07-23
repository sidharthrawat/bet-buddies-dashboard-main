import { DespositService } from './deposit.service';
export declare class DepositController {
    private depositService;
    constructor(depositService: DespositService);
    getCurrencyToken(): Promise<any>;
}
