import { NestFactory } from "@nestjs/core";
import { quotesModule } from "./quotes/quotes.module";
import { ValidationPipe } from "@nestjs/common";

async function bootstrap() {
  const app = NestFactory.create(quotesModule);
  (await app).useGlobalPipes(new ValidationPipe());
  (await app).listen(3000);
}
bootstrap();
