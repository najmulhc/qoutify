import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from "@nestjs/common";
import { CreateQouteDto } from "./dtos/createQoute.dto";

@Controller("qoutes")
export class QoutesController {
  // get all the qoutes
  @Get()
  getAllQoutes() {
    return "no qoutes are ready yet";
  }

  // get qoute by id
  @Get("/:id")
  getQouteById(@Param("id", ParseIntPipe) id: number) {
    return "you have to wait for some time";
  }

  // get a random qoute
  @Get("/random")
  getRandomQoute() {
    return "you want something random? huh!";
  }
  // post a qoute
  @Post()
  addQoute(@Body() body: CreateQouteDto) {
    console.log(body);
    return body;
  }

  // update a certain qoute
  @Patch("/:id")
  updateQouteById(@Param("id", ParseIntPipe) id: number,) {
    return "we need an api to update a qoute ";
  }

  // delete qoute by id
  @Delete("/:id")
  deleteQoute(@Param("id", ParseIntPipe) id: number) {
    return "we have no api set up yet";
  }
}
