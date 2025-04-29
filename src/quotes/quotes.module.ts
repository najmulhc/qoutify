import { Module } from "@nestjs/common";
import { quotesController } from "./quotes.controller";
import { quoteRepository } from "./quotes.repository";
import { quoteService } from "./quotes.service";

@Module({
  controllers: [quotesController],
  providers: [quoteRepository, quoteService]
})
export class quotesModule {}
