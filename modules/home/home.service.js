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
exports.HomeService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../prisma/prisma.service");
let HomeService = class HomeService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async findMany(page = 1, size = 10) {
        const skip = (page - 1) * size;
        const take = size;
        return await this.prisma.$transaction([
            this.prisma.homeResources.findMany({ skip, take }),
            this.prisma.homeResources.count(),
        ]);
    }
    create(dto) {
        return this.prisma.homeResources.create({ data: dto });
    }
    update(dto) {
        return this.prisma.homeResources.update({
            where: { id: dto.id },
            data: dto,
        });
    }
    delete(id) {
        return this.prisma.homeResources.delete({ where: { id } }).catch((e) => {
            throw new common_1.NotFoundException(e.meta ? e.meta.cause : 'unknown error');
        });
    }
};
exports.HomeService = HomeService;
exports.HomeService = HomeService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], HomeService);
//# sourceMappingURL=home.service.js.map