import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(process.env.PORT || 3030);
  console.log(`
  _____                __ _______ __
  |     |_.-----.-----.|__|    ___|  |.-----.--.--.--.
  |       |  _  |  _  ||  |    ___|  ||  _  |  |  |  |
  |_______|_____|___  ||__|___|   |__||_____|________|
                |_____|                               
  `);
}
bootstrap();
