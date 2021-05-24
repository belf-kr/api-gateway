import { Module } from "@nestjs/common";

import { TodoService } from "./todo.service";

import { TestModule } from "./test/test.module";

@Module({
  imports: [TestModule],
  providers: [TodoService],
})
export class TodoModule {}
