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
exports.CourseService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../prisma/prisma.service");
let CourseService = class CourseService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    createCourse(dto) {
        return this.prisma.courses.create({
            data: dto,
        });
    }
    createCourseOnTag(dto) {
        if (Array.isArray(dto)) {
            return this.prisma.coursesOnTags.createMany({
                data: dto,
            });
        }
        return this.prisma.coursesOnTags.create({
            data: dto,
        });
    }
    createTag(dto) {
        return this.prisma.courseTags.create({
            data: dto,
        });
    }
    updateTag(dto) {
        return this.prisma.courseTags.update({
            where: {
                id: dto.id,
            },
            data: dto,
        });
    }
    getTag() {
        return this.prisma.courseTags.findMany({
            include: {
                types: true,
            },
        });
    }
    deleteTag(id) {
        return this.prisma.courseTags.delete({
            where: {
                id: id,
            },
        });
    }
    createType(dto) {
        return this.prisma.courseTypes.create({
            data: dto,
        });
    }
    updateType(dto) {
        return this.prisma.courseTypes.update({
            where: {
                id: dto.id,
            },
            data: dto,
        });
    }
    getType(id) {
        return this.prisma.courseTypes.findMany({
            where: {
                id: id,
            },
            include: {
                tags: true,
            },
        });
    }
    deleteType(id) {
        return this.prisma.courseTypes.delete({
            where: {
                id: id,
            },
        });
    }
};
exports.CourseService = CourseService;
exports.CourseService = CourseService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], CourseService);
//# sourceMappingURL=course.service.js.map