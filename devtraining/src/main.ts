import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  /* whitelist: Serve para filtrar os dados da requisição
  Tudo que não estiver listado no DTO, será ignorado. 
  forbidNonWhitelisted: Nome auto-explicativo
  Qualquer payload com dados que não estão no DTO barrados.
  transform: Faz a tipagem dos objetos recebidos no payload baseados
  no DTO */
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  ); // ValidationPipe
  await app.listen(3000);
}
bootstrap();
