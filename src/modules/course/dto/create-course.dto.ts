// create-course.dto.ts

import { IsString, IsNumber, IsOptional, IsNotEmpty } from 'class-validator';

export class CreateCourseDto {
  @IsNotEmpty()
  @IsString()
  title: string;

  @IsString()
  @IsOptional()
  subTitle: string;

  @IsString()
  @IsOptional()
  desc: string;

  @IsNumber()
  @IsOptional()
  coverId: number;

  @IsNumber()
  @IsNotEmpty()
  author: number;

  @IsNumber()
  @IsOptional()
  originPrice: number;

  @IsNumber()
  @IsOptional()
  price: number;

  @IsNumber()
  @IsOptional()
  status: number;

  @IsNumber()
  @IsOptional()
  counts: number;

  @IsNumber()
  @IsOptional()
  order: number;

  @IsString()
  @IsOptional()
  detail: string;

  @IsString()
  @IsOptional()
  type: string;
}

export class CreateCourseTagInterdace extends CreateCourseDto {
  tags: {
    create: Array<{ tagId: number }>;
  };
}

export class CreateCourseWithTagDto extends CreateCourseDto {
  @IsNumber({}, { each: true })
  @IsOptional()
  tags: number[];
}
