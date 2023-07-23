import { AddPlatformDto } from 'src/dto/addPlatform.dto';
import { AddPlatformService } from './addPlatform.service';
export declare class AddPlatformController {
    private addPlatformService;
    constructor(addPlatformService: AddPlatformService);
    getPlatform(): Promise<any>;
    setPlatform(addPlatformDto: AddPlatformDto): Promise<any>;
}
