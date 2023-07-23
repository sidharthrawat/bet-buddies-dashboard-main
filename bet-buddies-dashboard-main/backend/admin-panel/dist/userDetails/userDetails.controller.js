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
exports.UserDetailsController = void 0;
const common_1 = require("@nestjs/common");
``;
const userDetails_service_1 = require("./userDetails.service");
let UserDetailsController = class UserDetailsController {
    constructor(userDetailsService) {
        this.userDetailsService = userDetailsService;
    }
    getAllQuestions() {
        return this.userDetailsService.getAllUsers();
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], UserDetailsController.prototype, "getAllQuestions", null);
UserDetailsController = __decorate([
    (0, common_1.Controller)('users'),
    __metadata("design:paramtypes", [userDetails_service_1.UserDetailsService])
], UserDetailsController);
exports.UserDetailsController = UserDetailsController;
//# sourceMappingURL=userDetails.controller.js.map