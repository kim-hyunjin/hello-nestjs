import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';

@Controller('movies')
export class MoviesController {
  @Get()
  getAll() {
    return 'This will return all movies';
  }

  @Get('/search')
  search(@Query('year') year: string) {
    return `We are searching movie made after ${year}`;
  }

  @Get('/:id')
  getOne(@Param('id') id: string) {
    return `This will return one movie : ${id}`;
  }

  @Post()
  create(@Body() movie) {
    return movie;
  }

  @Delete('/:id')
  remove(@Param('id') id: string) {
    return `This will delete movie : ${id}`;
  }

  @Patch('/:id')
  patch(@Param('id') id: string, @Body() data) {
    return {
      updatedMovie: id,
      ...data,
    };
  }
}
