import { NestFactory } from '@nestjs/core';
import { QoutesModule } from './qoutes/qoutes.module';

async function bootstrap() {
  const app = NestFactory.create(QoutesModule);
  (await app).listen(process.env.PORT || 3000);
}
bootstrap();
