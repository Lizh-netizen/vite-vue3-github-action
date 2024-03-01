import { Body, Controller, Post } from '@nestjs/common';
import { CourseService } from './course.service';
import {
  CreateCourseDto,
  CreateCourseTagInterdace,
  CreateCourseWithTagDto,
} from './dto/create-course.dto';
import { CreateCoursesOnTagDto } from './dto/create-course-tag.dto';

@Controller('course')
export class CourseController {
  constructor(private courseService: CourseService) {}

  @Post()
  async create(@Body() dto: CreateCourseWithTagDto) {
    if (dto.tags && dto.tags.length > 0) {
      const tags = {
        create: dto.tags.map((tag) => ({
          tagId: tag,
        })),
      };
      return await this.courseService.createCourse({
        ...dto,
        tags,
      });
    }
    return await this.courseService.createCourse(dto);
  }
}
