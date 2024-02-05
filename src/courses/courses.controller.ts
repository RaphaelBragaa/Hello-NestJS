import { Controller, Get, Param, Post, Body, HttpCode, HttpStatus, Res, Patch, Delete } from '@nestjs/common';

@Controller('courses')
export class CoursesController {
  @Get('list')
  findAll(@Res() response) {
    return response.status(200).json({ message: 'lista adulta' });
  }

  @Get('search/:name/:id')
  findOne(@Param('id') id: string, @Param('name') name: string) {
    return `O cliente ${name} tem ${id} anos`;
  }

  @HttpCode(204)
  @Post()
  create(@Body() body) {
    return body;
  }

  @Patch('update/:id')
  update(@Param('id') id: string) {
    return `A atualização ${id} foi feita com sucesso`;
  }

  @HttpCode(HttpStatus.NO_CONTENT)
  @Delete('delete/:id')
  remove(@Param('id') id: string) {
    return `Curso de número ${id} deletado com sucesso`;
  }
}
