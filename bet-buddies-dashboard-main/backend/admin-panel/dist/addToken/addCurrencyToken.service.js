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
exports.AddCurrencyTokenService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const currencyToken_1 = require("../model/addCurrencySchema/currencyToken");
let AddCurrencyTokenService = class AddCurrencyTokenService {
    constructor(addCurrencyTokenModel) {
        this.addCurrencyTokenModel = addCurrencyTokenModel;
    }
    async setCurrencyToken(body) {
        const { platform, name, description } = body;
        console.log(body);
        const isCurrencyAlreadyPresent = await this.addCurrencyTokenModel.findOne({ name });
        if (isCurrencyAlreadyPresent) {
            return ('Currency Already Present');
        }
        else {
            await this.addCurrencyTokenModel.create({
                platform,
                name,
                description,
            });
            if (!name || !description || !platform) {
                return ('Error occured, please enter the correct details');
            }
            else {
                return ('Currency Token added successfully to the DB');
            }
        }
    }
    async getCurrencyToken() {
        return await this.addCurrencyTokenModel.find();
    }
};
AddCurrencyTokenService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(currencyToken_1.CurrencyToken.name, 'bet-buddies')),
    __metadata("design:paramtypes", [mongoose_2.Model])
], AddCurrencyTokenService);
exports.AddCurrencyTokenService = AddCurrencyTokenService;
//# sourceMappingURL=addCurrencyToken.service.js.map