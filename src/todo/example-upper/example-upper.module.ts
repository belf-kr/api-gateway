import { forwardRef, Module } from "@nestjs/common";

import { ExampleUpperService } from "./example-upper.service";
import { ExampleUpperController } from "./example-upper.controller";

import { TodoModule } from "../todo.module";

@Module({
  imports: [forwardRef(() => TodoModule)],
  providers: [ExampleUpperService],
  controllers: [ExampleUpperController],
})
export class ExampleUpperModule {}
