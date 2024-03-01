import { Injectable } from '@nestjs/common';
import { HomeResources } from '@prisma/client';
import { PrismaService } from './prisma/prisma.service';

@Injectable()
export class AppService {
  constructor(private prisma: PrismaService) {}
  getHello(): Promise<HomeResources[]> {
    const res = this.prisma.homeResources.findMany({});
    return res;
  }
}
