import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { AppService } from './app.service';
import { AppController } from './app.controller';
import * as DailyRotate from 'winston-daily-rotate-file';
import {
  utilities as nestWinstonModuleUtilities,
  WinstonModule,
} from 'nest-winston';
import { HomeModule } from './modules/home/home.module';
import { CourseModule } from './modules/course/course.module';
import * as winston from 'winston';
const isDubug = process.env.NODE_ENV === 'development';
console.log('🚀 ~ file: app.module.ts:12 ~ isDubug:', isDubug);
function createDailyRotateTransport(level: string, filename: string) {
  return new DailyRotate({
    level,
    dirname: 'logs',
    filename: `${filename}application-%DATE%.log`,
    datePattern: 'YYYY-MM-DD',
    zippedArchive: true,
    maxSize: '20m',
    maxFiles: '14d',
    format: winston.format.combine(
      winston.format.timestamp(),
      winston.format.simple(),
    ),
  });
}
@Module({
  imports: [
    PrismaModule,
    WinstonModule.forRoot({
      transports: [
        new winston.transports.Console({
          format: winston.format.combine(
            winston.format.timestamp(),
            winston.format.ms(),
            nestWinstonModuleUtilities.format.nestLike('MyApp', {
              colors: true,
              prettyPrint: true,
            }),
          ),
        }),
        ...(isDubug
          ? []
          : [
              createDailyRotateTransport('info', 'app'),
              createDailyRotateTransport('error', 'error'),
            ]),
      ],
    }),
    HomeModule,
    CourseModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
