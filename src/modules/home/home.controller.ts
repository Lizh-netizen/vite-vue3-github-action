import {
  Body,
  Controller,
  DefaultValuePipe,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
  Query,
  Version,
} from '@nestjs/common';
import { HomeService } from './home.service';
import { CreateHomeDTO } from './dto/create-home.dto';
import { UpdateHomeDto } from './dto/update-home.dto';

@Controller('home')
export class HomeController {
  constructor(private homeService: HomeService) {}
  @Get()
  async find(
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number,
    @Query('size', new DefaultValuePipe(10), ParseIntPipe) size: number,
  ) {
    const [data, total] = await this.homeService.findMany(page, size);
    return {
      data,
      total,
    };
  }
  // POST /home
  @Post()
  create(@Body() dto: CreateHomeDTO) {
    return this.homeService.create(dto);
  }

  @Put()
  update(@Body() dto: UpdateHomeDto) {
    return this.homeService.update(dto);
  }

  @Delete('/123')
  delete1() {
    return 'helo';
  }
  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.homeService.delete(id);
  }
}
