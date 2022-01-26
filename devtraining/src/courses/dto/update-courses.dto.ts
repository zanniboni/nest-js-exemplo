import { PartialType } from '@nestjs/mapped-types';
import { CreateCoursesDto } from './create-courses.dto';

/* A propriedade PartialType extende as mesmas propriedades da classe createCoursesDto
porém, ela não se faz obrigatorio o preenchimento de todas as propriedades da classe na requisição
Tornando necessário uma das informações da classe e não necessariamente todas */
export class UpdateCoursesDto extends PartialType(CreateCoursesDto) {}
