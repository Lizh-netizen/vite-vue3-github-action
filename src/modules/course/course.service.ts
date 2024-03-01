import { UpdateTypeDto } from './dto/update-type.dto';
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateTypeDto } from './dto/create-type.dto';
import { CreateTagDto } from './dto/create-tag.dto';
import { UpdateTagDto } from './dto/update-tag.dto';
import {
  CreateCourseDto,
  CreateCourseTagInterdace,
} from './dto/create-course.dto';
import { CreateCoursesOnTagDto } from './dto/create-course-tag.dto';

@Injectable()
export class CourseService {
  constructor(private prisma: PrismaService) {}
  // 创建课程
  createCourse(dto: CreateCourseDto | CreateCourseTagInterdace) {
    return this.prisma.courses.create({
      // tags请求到前端 -> checkbox -> 数组
      data: dto,
    });
  }
  // 课程与标签关联
  createCourseOnTag(dto: CreateCoursesOnTagDto | CreateCoursesOnTagDto[]) {
    // 批量创建
    if (Array.isArray(dto)) {
      return this.prisma.coursesOnTags.createMany({
        data: dto,
      });
    }
    // 创建单条
    return this.prisma.coursesOnTags.create({
      data: dto,
    });
  }

  // 标签CRUD
  createTag(dto: CreateTagDto) {
    return this.prisma.courseTags.create({
      data: dto,
    });
  }
  updateTag(dto: UpdateTagDto) {
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
  // 分类CRUD
  createType(dto: CreateTypeDto) {
    return this.prisma.courseTypes.create({
      data: dto,
    });
  }
  updateType(dto: UpdateTypeDto) {
    return this.prisma.courseTypes.update({
      where: {
        id: dto.id,
      },
      data: dto,
    });
  }
  getType(id: number) {
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
}
