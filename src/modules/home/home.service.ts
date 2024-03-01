import { Injectable, NotFoundException } from '@nestjs/common';
import { HomeResources } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateHomeDTO } from './dto/create-home.dto';
import { UpdateHomeDto } from './dto/update-home.dto';

@Injectable()
export class HomeService {
  constructor(private prisma: PrismaService) {}
  async findMany(page = 1, size = 10): Promise<[HomeResources[], number]> {
    const skip = (page - 1) * size;
    const take = size;
    return await this.prisma.$transaction([
      this.prisma.homeResources.findMany({ skip, take }),
      this.prisma.homeResources.count(),
    ]);
  }
  create(dto: CreateHomeDTO) {
    return this.prisma.homeResources.create({ data: dto });
  }

  update(dto: UpdateHomeDto) {
    return this.prisma.homeResources.update({
      where: { id: dto.id },
      data: dto,
    });
  }
  delete(id: number) {
    return this.prisma.homeResources.delete({ where: { id } }).catch((e) => {
      throw new NotFoundException(e.meta ? e.meta.cause : 'unknown error');
    });
  }
}
