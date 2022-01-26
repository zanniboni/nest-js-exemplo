import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { Course } from './entities/course.entity'; // Import da entidade de dados

@Injectable()
export class CoursesService {
  //Atribuição dos valores da entidade para uma variável objeto
  private courses: Course[] = [
    {
      id: 1,
      name: 'Fundamentos do NestJS',
      description: 'Fundamentos',
      tags: ['node.js', 'nestjs', 'javascript'],
    },
  ];

  /* É utilizado o sufixo "Dto" para representar um Data Transfer object
  Ou seja, um objeto que será recebido/enviado através da requisição do frontend */
  /* Retorna todos os objetos */
  findAll() {
    return this.courses;
  }

  /* Retorna apenas um objeto */
  findOne(id: string) {
    /* Busca o curso e salva em uma constante */
    const course = this.courses.find(
      (course: Course) => course.id === Number(id),
    );
    /* Verifica se o curso foi encontrado */
    if (!course) {
      /* Retorna uma mensagem de erro 404 not foud, caso o curso não seja encontrado */
      throw new HttpException(
        `Course ID ${id} not found.`,
        HttpStatus.NOT_FOUND,
      );
    } else {
      return course;
    }
  }

  /* Cria um novo objeto */
  create(createCourseDto: any) {
    this.courses.push(createCourseDto);
  }

  /* Atualiza um objeto */
  update(updateCourseDto: any, id: string) {
    const indexCourse = this.courses.findIndex(
      (course) => course.id === Number(id),
    );
    this.courses[indexCourse] = updateCourseDto;
  }

  /* Remove um objeto */
  remove(id: string) {
    const indexCourse = this.courses.findIndex(
      (course) => course.id === Number(id),
    );

    if (indexCourse >= 0) {
      this.courses.splice(indexCourse, 1);
    }
  }
}
