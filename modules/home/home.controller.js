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
exports.HomeController = void 0;
const common_1 = require("@nestjs/common");
const home_service_1 = require("./home.service");
const create_home_dto_1 = require("./dto/create-home.dto");
const update_home_dto_1 = require("./dto/update-home.dto");
let HomeController = class HomeController {
    constructor(homeService) {
        this.homeService = homeService;
    }
    async find(page, size) {
        const [data, total] = await this.homeService.findMany(page, size);
        return {
            data,
            total,
        };
    }
    create(dto) {
        return this.homeService.create(dto);
    }
    update(dto) {
        return this.homeService.update(dto);
    }
    delete1() {
        return 'helo';
    }
    delete(id) {
        return this.homeService.delete(id);
    }
};
exports.HomeController = HomeController;
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)('page', new common_1.DefaultValuePipe(1), common_1.ParseIntPipe)),
    __param(1, (0, common_1.Query)('size', new common_1.DefaultValuePipe(10), common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", Promise)
], HomeController.prototype, "find", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_home_dto_1.CreateHomeDTO]),
    __metadata("design:returntype", void 0)
], HomeController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_home_dto_1.UpdateHomeDto]),
    __metadata("design:returntype", void 0)
], HomeController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)('/123'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], HomeController.prototype, "delete1", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], HomeController.prototype, "delete", null);
exports.HomeController = HomeController = __decorate([
    (0, common_1.Controller)('home'),
    __metadata("design:paramtypes", [home_service_1.HomeService])
], HomeController);
//# sourceMappingURL=home.controller.js.map