import { IsString } from "class-validator";

export class CreateQouteDto {
  @IsString()
  author: string;

  @IsString()
  content: string;
}
