import { Module } from "@nestjs/common";
import { TodoService } from "./todo.service";
import { TestModule } from "./test/test.module";

@Module({
  providers: [TodoService],
  imports: [TestModule],
})
export class TodoModule {}
