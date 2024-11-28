import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const PORT = 3333 
  const app = await NestFactory.create(AppModule);
  await app.listen(PORT, () => {
    console.log(`App running with http://localhost:${PORT}`)
  })
}
bootstrap();
