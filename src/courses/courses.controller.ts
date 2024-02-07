import { Controller, Get, Param, Post, Body, HttpCode, HttpStatus,Put , Delete, NotFoundException  } from '@nestjs/common';
import { CoursesService } from './courses.service';

@Controller('courses')
export class CoursesController {
  constructor(private readonly courseService: CoursesService) {}
  @Get()
  findAll() {
    const response = this.courseService.findAll();
    if (response.length === 0) {
      throw new NotFoundException();
    }
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    const response = this.courseService.findOne(+id);
    if (!response) {
      throw new NotFoundException(`Not found Course id ${id}`);
    }
  }

  @HttpCode(204)
  @Post()
  create(@Body() body) {
    return this.courseService.create(body);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() body) {
    return this.courseService.update(id, body);
  }

  @HttpCode(HttpStatus.NO_CONTENT)
  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.courseService.remove(id);
  }
}
