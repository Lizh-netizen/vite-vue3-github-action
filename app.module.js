"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const prisma_module_1 = require("./prisma/prisma.module");
const app_service_1 = require("./app.service");
const app_controller_1 = require("./app.controller");
const DailyRotate = require("winston-daily-rotate-file");
const nest_winston_1 = require("nest-winston");
const home_module_1 = require("./modules/home/home.module");
const course_module_1 = require("./modules/course/course.module");
const winston = require("winston");
const isDubug = process.env.NODE_ENV === 'development';
console.log('🚀 ~ file: app.module.ts:12 ~ isDubug:', isDubug);
function createDailyRotateTransport(level, filename) {
    return new DailyRotate({
        level,
        dirname: 'logs',
        filename: `${filename}application-%DATE%.log`,
        datePattern: 'YYYY-MM-DD',
        zippedArchive: true,
        maxSize: '20m',
        maxFiles: '14d',
        format: winston.format.combine(winston.format.timestamp(), winston.format.simple()),
    });
}
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            prisma_module_1.PrismaModule,
            nest_winston_1.WinstonModule.forRoot({
                transports: [
                    new winston.transports.Console({
                        format: winston.format.combine(winston.format.timestamp(), winston.format.ms(), nest_winston_1.utilities.format.nestLike('MyApp', {
                            colors: true,
                            prettyPrint: true,
                        })),
                    }),
                    ...(isDubug
                        ? []
                        : [
                            createDailyRotateTransport('info', 'app'),
                            createDailyRotateTransport('error', 'error'),
                        ]),
                ],
            }),
            home_module_1.HomeModule,
            course_module_1.CourseModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map