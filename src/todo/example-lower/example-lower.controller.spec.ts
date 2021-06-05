import { Test, TestingModule } from "@nestjs/testing";

import { ExampleLowerController } from "./example-lower.controller";

describe("ExampleLowerController", () => {
  let controller: ExampleLowerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ExampleLowerController],
    }).compile();

    controller = module.get<ExampleLowerController>(ExampleLowerController);
  });

  it("should be defined", () => {
    expect(controller).toBeDefined();
  });
});
