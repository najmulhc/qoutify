import { NestFactory } from "@nestjs/core";
import { QoutesModule } from "./qoutes/qoutes.module";
import { ValidationPipe } from "@nestjs/common";

async function bootstrap() {
  const app = NestFactory.create(QoutesModule);
  (await app).useGlobalPipes(new ValidationPipe());
  (await app).listen(3000);
}
bootstrap();
