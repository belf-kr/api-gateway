import { Module } from "@nestjs/common";

import { TodoController } from "./todo.controller";
import { TodoService } from "./todo.service";

import { TestModule } from "./test/test.module";

@Module({
  imports: [TestModule],
  controllers: [TodoController],
  providers: [TodoService],
})
export class TodoModule {}
