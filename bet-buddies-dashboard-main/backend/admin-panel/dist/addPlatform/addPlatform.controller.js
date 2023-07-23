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
exports.AddPlatformController = void 0;
const common_1 = require("@nestjs/common");
const addPlatform_dto_1 = require("../dto/addPlatform.dto");
const addPlatform_service_1 = require("./addPlatform.service");
let AddPlatformController = class AddPlatformController {
    constructor(addPlatformService) {
        this.addPlatformService = addPlatformService;
    }
    getPlatform() {
        return this.addPlatformService.getPlatform();
    }
    setPlatform(addPlatformDto) {
        console.log("Inside add-platform controller");
        return this.addPlatformService.setPlatform(addPlatformDto);
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AddPlatformController.prototype, "getPlatform", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [addPlatform_dto_1.AddPlatformDto]),
    __metadata("design:returntype", Promise)
], AddPlatformController.prototype, "setPlatform", null);
AddPlatformController = __decorate([
    (0, common_1.Controller)('add-platform'),
    __metadata("design:paramtypes", [addPlatform_service_1.AddPlatformService])
], AddPlatformController);
exports.AddPlatformController = AddPlatformController;
//# sourceMappingURL=addPlatform.controller.js.map