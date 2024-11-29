import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const PORT = 3333 
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({whitelist:true}))
  await app.listen(PORT, () => {
    console.log(`App running with http://localhost:${PORT}`)
  })
}
bootstrap();
