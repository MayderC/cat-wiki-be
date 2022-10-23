import { NestFactory } from '@nestjs/core';
import { NestFastifyApplication } from '@nestjs/platform-fastify';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(AppModule);
  app.enableCors({
    origin: process.env.CORS_ORIGIN 
  });
  await app.listen(process.env.PORT || 3000);
}
bootstrap();
