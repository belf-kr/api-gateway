import { Module } from "@nestjs/common";

import { ExampleUpperService } from "./example-upper.service";
import { ExampleUpperController } from "./example-upper.controller";

@Module({
  providers: [ExampleUpperService],
  controllers: [ExampleUpperController],
})
export class ExampleUpperModule {}
