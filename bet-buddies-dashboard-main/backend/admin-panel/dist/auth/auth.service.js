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
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const bcrypt = require("bcryptjs");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const admin_1 = require("../model/admin");
const jwt_1 = require("@nestjs/jwt");
let AuthService = class AuthService {
    constructor(adminModel, jwtService) {
        this.adminModel = adminModel;
        this.jwtService = jwtService;
    }
    async details(DetailsDto) {
        const { name, email, password } = DetailsDto;
        const hashedPassword = await bcrypt.hash(password, 10);
        const admin = await this.adminModel.updateOne({
            password: hashedPassword
        });
        console.log(name, email, hashedPassword, admin);
    }
    async login(loginDto) {
        const { email, password } = loginDto;
        const admin = await this.adminModel.findOne({ email });
        console.log(admin);
        const isPasswordMatched = await bcrypt.compare(password, admin.password);
        if (!admin) {
            throw new common_1.UnauthorizedException('Enter correct admin account details');
        }
        else if (!isPasswordMatched) {
            throw new common_1.UnauthorizedException('Please enter the correct password');
        }
        else {
            const token = this.jwtService.sign({ id: admin._id });
            console.log("Token id:  " + token);
            return { token };
        }
    }
};
AuthService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(admin_1.Admin.name, 'adminDB')),
    __metadata("design:paramtypes", [mongoose_2.Model,
        jwt_1.JwtService])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map