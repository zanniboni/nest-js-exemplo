import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Patch,
  Delete,
} from '@nestjs/common';

import { CoursesService } from './courses.service'; // Import do service
import { CreateCoursesDto } from './dto/create-courses.dto';
import { UpdateCoursesDto } from './dto/update-courses.dto';

@Controller('courses') /* Prefix da rota - EX: localhost:3000/courses */
export class CoursesController {
  // Constructor usado para injeção de dependencias
  constructor(private readonly coursesService: CoursesService) {}

  @Get(
    'list',
  ) /* Rota aninhada ao prefix do controller - EX: localhost:3000/courses/list/ */
  findAll() {
    return this.coursesService.findAll(); // Lista todos os cursos vindos do serviço
  }

  @Get(':id') //Adiciona uma parâmetro dinâmico a rota
  /* O decorator @Param recebe o nome do parametro informado 
  É possivel adicionar uma tipagem a essa parâmetro ou simplesmente
  retornar um objeto, com todos os parametros */
  findOne(@Param('id') id: string) {
    return this.coursesService.findOne(id);
  }

  @Post() //Post da requisição
  create(@Body() createCourseDto: CreateCoursesDto) {
    /* É possivel adicionar um parametro tipo string dentro de @Body() para
    filtrar os dados recebidos do payload  */
    return this.coursesService.create(createCourseDto);
  }

  /* O método patch e delete são basicamente iguais em questão de codificação
  Ambos recebem o id a ser atualizado/deletado e o body da requisição */
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCourseDto: UpdateCoursesDto) {
    return this.coursesService.update(updateCourseDto, id);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.coursesService.remove(id);
  }
}
