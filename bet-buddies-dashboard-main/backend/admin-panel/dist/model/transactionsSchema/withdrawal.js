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
exports.WithdrawalSchema = exports.Withdrawal = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const users_1 = require("../users");
let Withdrawal = class Withdrawal {
};
__decorate([
    (0, mongoose_1.Prop)({ ref: users_1.User.name }),
    __metadata("design:type", mongoose_2.default.Types.ObjectId)
], Withdrawal.prototype, "fullName", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", Number)
], Withdrawal.prototype, "amount", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], Withdrawal.prototype, "reference", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Withdrawal.prototype, "currency", void 0);
Withdrawal = __decorate([
    (0, mongoose_1.Schema)({
        timestamps: true
    })
], Withdrawal);
exports.Withdrawal = Withdrawal;
exports.WithdrawalSchema = mongoose_1.SchemaFactory.createForClass(Withdrawal);
//# sourceMappingURL=withdrawal.js.map