/* Faz a verificação para checar se realmente é uma string 
Caso algum dos parâmetros não forem passados ele irá retornar uma mensagem 
detalhada do erro */
import { IsString } from 'class-validator';

export class CreateCoursesDto {
  @IsString()
  readonly name: string;

  @IsString()
  readonly description: string;

  /* O parametro each signfica que cada elemento do objeto também deves ser uma string */
  @IsString({ each: true })
  readonly tags: string[];
}
