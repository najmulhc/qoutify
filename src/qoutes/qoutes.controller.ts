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
import { CreateQouteDto } from "./dtos/createQoute.dto";
import { QouteService } from "./qoute.service";

@Controller("qoutes")
export class QoutesController {
  service: QouteService;
  constructor() {
    this.service = new QouteService();
  }
  // get all the qoutes
  @Get()
  async getAllQoutes() {
    return await this.service.getAllQoutes();
  }

  // get qoute by id
  @Get("/qoute/:id")
  async getQouteById(@Param("id", ParseIntPipe) id: number) {
    const qoutes = await this.service.getQouteById(id);
    if (!qoutes[0]) {
      throw new NotFoundException("no qoute found in the given id");
    } else {
      return qoutes[0];
    }
  }

  // get a random qoute
  @Get("/random")
  getRandomQoute() {
    return this.service.getRandomQoute();
  }
  // post a qoute
  @Post()
  async addQoute(@Body() body: CreateQouteDto) {
    return await this.service.postQoute(body.author, body.content);
  }

  // update a certain qoute
  @Patch("/:id")
  updateQouteById(@Param("id", ParseIntPipe) id: number) {
    return "we need an api to update a qoute ";
  }

  // delete qoute by id
  @Delete("/:id")
  deleteQoute(@Param("id", ParseIntPipe) id: number) {
    return "we have no api set up yet";
  }
}
