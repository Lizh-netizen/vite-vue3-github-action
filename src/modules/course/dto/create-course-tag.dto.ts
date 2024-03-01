// create-course-on-tag.dto.ts

import { IsNumber } from 'class-validator';

export class CreateCoursesOnTagDto {
  @IsNumber()
  courseId: number;

  @IsNumber()
  tagId: number;
}
