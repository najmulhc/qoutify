import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from "@nestjs/common";
import { CreatequoteDto } from "./dtos/createQuote.dto";
import { quoteService } from "./quotes.service";

@Controller("")
export class quotesController {
  service: quoteService;
  constructor() {
    this.service = new quoteService();
  }
  // get all the quotes
  @Get()
   getAllquotes() {
    return  this.service.getAllquotes();
  }

  // get quote by id
  @Get("/quote/:id")
   getquoteById(@Param("id", ParseIntPipe) id: number) {
    const quotes =  this.service.getquoteById(id);
    if (!quotes[0]) {
      throw new NotFoundException("no quote found in the given id");
    } else {
      return quotes[0];
    }
  }

  // get a random quote
  @Get("/random")
  getRandomquote() {
    return this.service.getRandomquote();
  }
  // post a quote
  @Post()
   addquote(@Body() body: CreatequoteDto) {
    return  this.service.postquote(body.author, body.content);
  }

  // update a certain quote
  @Patch("/quote/:id")
   updatequoteById(
    @Param("id", ParseIntPipe) id: number,
    @Body() body: CreatequoteDto,
  ) {
    const quotes =  this.service.getquoteById(id);
    if (!quotes[0]) {
      throw new NotFoundException("no quote found in the given id");
    } else {
      return  this.service.updatequote(id, {
        id,
        ...body,
      });
    }
  }

  // delete quote by id
  @Delete("/quote/:id")
   deletequote(@Param("id", ParseIntPipe) id: number) {
    const quotes =  this.service.getquoteById(id);
    if (!quotes[0]) {
      throw new NotFoundException("no quote found in the given id");
    } else {
      return  this.service.deletequote(id);
    }
  }
}
