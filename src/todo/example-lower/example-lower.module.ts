import { forwardRef, Module } from "@nestjs/common";

import { ExampleLowerController } from "./example-lower.controller";
import { ExampleLowerService } from "./example-lower.service";

import { TodoModule } from "../todo.module";

@Module({
  imports: [forwardRef(() => TodoModule)],
  controllers: [ExampleLowerController],
  providers: [ExampleLowerService],
})
export class ExampleLowerModule {}
