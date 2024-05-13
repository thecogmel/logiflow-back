import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
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
