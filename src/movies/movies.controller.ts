import { Body, Controller, Delete, Get, Param, Patch, Post, Query, Req, Res } from '@nestjs/common';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';
import { Movie } from './entities/movie.entity';
import { MoviesService } from './movies.service';

@Controller('movies')
export class MoviesController {

  constructor(readonly moviesService: MoviesService) {
  }
  

  @Get()
  getAll(): Movie[] { // NestJs는 Express위에서 동작하므로 getAll(@Req() req, @Res() res) 와 같은 방식으로 Express의 req, res를 직접 사용할 수도 있다.
    return this.moviesService.getAll();
  }

  @Get('/search')
  search(@Query('year') year: number): Movie[] {
    return this.moviesService.findByYear(year);
  }

  @Get('/:id')
  getOne(@Param('id') id: number): Movie {
    return this.moviesService.getOne(id);
  }

  @Post()
  create(@Body() movie: CreateMovieDto) {
    return this.moviesService.create(movie);
  }

  @Delete('/:id')
  remove(@Param('id') id: number) {
    return this.moviesService.deleteOne(id);
  }

  @Patch('/:id')
  patch(@Param('id') id: number, @Body() data: UpdateMovieDto) {
    return this.moviesService.update(id, data);
  }
}
