import { IsString } from "class-validator";

export class CreatequoteDto {
  @IsString()
  author: string;

  @IsString()
  content: string;
}
