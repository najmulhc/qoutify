import { Test, TestingModule } from "@nestjs/testing";
import { quotesController } from "./quotes.controller";

describe("quotesController", () => {
  let controller: quotesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [quotesController],
    }).compile();

    controller = module.get<quotesController>(quotesController);
  });

  it("should be defined", () => {
    expect(controller).toBeDefined();
  });
});
