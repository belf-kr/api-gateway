import { Test, TestingModule } from "@nestjs/testing";

import { BelfJwtService } from "./belf-jwt.service";

describe("BelfJwtService", () => {
  let service: BelfJwtService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BelfJwtService],
    }).compile();

    service = module.get<BelfJwtService>(BelfJwtService);
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });
});
