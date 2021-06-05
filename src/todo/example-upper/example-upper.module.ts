import { forwardRef, Module } from "@nestjs/common";

import { ExampleUpperController } from "./example-upper.controller";
import { ExampleUpperService } from "./example-upper.service";

import { TodoModule } from "../todo.module";

@Module({
  imports: [forwardRef(() => TodoModule)],
  controllers: [ExampleUpperController],
  providers: [ExampleUpperService],
})
export class ExampleUpperModule {}
