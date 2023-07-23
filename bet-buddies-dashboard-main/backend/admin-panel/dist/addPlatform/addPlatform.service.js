"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddPlatformService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const platform_1 = require("../model/addCurrencySchema/platform");
let AddPlatformService = class AddPlatformService {
    constructor(addPlatformModel) {
        this.addPlatformModel = addPlatformModel;
    }
    async setPlatform(body) {
        console.log(body);
        const { name, description, icon } = body;
        const isPlatformAlreadyPresent = await this.addPlatformModel.findOne({ name });
        if (isPlatformAlreadyPresent) {
            return ('Platform already exists');
        }
        await this.addPlatformModel.create({
            name,
            description,
            icon,
        });
        return ('Succesful addition');
    }
    async getPlatform() {
        return await this.addPlatformModel.find();
    }
};
AddPlatformService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(platform_1.Platform.name, 'bet-buddies')),
    __metadata("design:paramtypes", [mongoose_2.Model])
], AddPlatformService);
exports.AddPlatformService = AddPlatformService;
//# sourceMappingURL=addPlatform.service.js.map