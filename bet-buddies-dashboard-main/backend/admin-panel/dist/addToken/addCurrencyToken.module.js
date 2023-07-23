"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddCurrencyTokenModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const currencyToken_1 = require("../model/addCurrencySchema/currencyToken");
const addCurrencyToken_controller_1 = require("./addCurrencyToken.controller");
const addCurrencyToken_service_1 = require("./addCurrencyToken.service");
let AddCurrencyTokenModule = class AddCurrencyTokenModule {
};
AddCurrencyTokenModule = __decorate([
    (0, common_1.Module)({
        imports: [mongoose_1.MongooseModule.forFeature([{ name: 'CurrencyToken', schema: currencyToken_1.CurrencyTokenSchema }], 'bet-buddies')],
        controllers: [addCurrencyToken_controller_1.AddCurrencyTokenController],
        providers: [addCurrencyToken_service_1.AddCurrencyTokenService]
    })
], AddCurrencyTokenModule);
exports.AddCurrencyTokenModule = AddCurrencyTokenModule;
//# sourceMappingURL=addCurrencyToken.module.js.map