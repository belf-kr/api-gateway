import { Module } from "@nestjs/common";

import { ExampleLowerController } from "./example-lower.controller";
import { ExampleLowerService } from "./example-lower.service";

@Module({
  controllers: [ExampleLowerController],
  providers: [ExampleLowerService],
})
export class ExampleLowerModule {}
