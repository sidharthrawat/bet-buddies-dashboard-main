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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CurrencyTokenSchema = exports.CurrencyToken = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const admin_1 = require("../admin");
const platform_1 = require("./platform");
let CurrencyToken = class CurrencyToken {
};
__decorate([
    (0, mongoose_1.Prop)({ ref: platform_1.Platform.name }),
    __metadata("design:type", mongoose_2.default.Types.ObjectId)
], CurrencyToken.prototype, "platform", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], CurrencyToken.prototype, "key", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], CurrencyToken.prototype, "name", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], CurrencyToken.prototype, "description", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], CurrencyToken.prototype, "icon", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: false }),
    __metadata("design:type", Boolean)
], CurrencyToken.prototype, "isAvailable", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: false }),
    __metadata("design:type", Boolean)
], CurrencyToken.prototype, "isLocked", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", admin_1.Admin)
], CurrencyToken.prototype, "createdBy", void 0);
CurrencyToken = __decorate([
    (0, mongoose_1.Schema)({
        timestamps: true
    })
], CurrencyToken);
exports.CurrencyToken = CurrencyToken;
exports.CurrencyTokenSchema = mongoose_1.SchemaFactory.createForClass(CurrencyToken);
//# sourceMappingURL=currencyToken.js.map