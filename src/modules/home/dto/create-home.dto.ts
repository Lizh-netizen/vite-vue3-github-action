import { IsIn, IsNumber, IsOptional, IsString, IsUrl } from 'class-validator';

export class CreateHomeDTO {
  @IsString()
  @IsOptional()
  title: string;

  @IsString()
  @IsOptional()
  subTitle: string;

  @IsString()
  @IsUrl()
  @IsOptional()
  url: string;

  @IsString()
  @IsOptional()
  image: string;

  @IsString()
  @IsOptional()
  desc: string;

  @IsString()
  @IsIn(['home', 'study'])
  module: string;

  @IsString()
  @IsOptional()
  @IsIn(['avatar', 'icon'])
  type: string;

  @IsNumber()
  @IsOptional()
  order: number;
}
