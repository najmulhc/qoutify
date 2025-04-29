import { Module } from "@nestjs/common";
import { quotesController } from "./quotes.controller";

@Module({
  controllers: [quotesController],
})
export class quotesModule {}
