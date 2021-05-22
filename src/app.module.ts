import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";

import { TodoController } from "./todo/todo.controller";
import { MockController } from "./mock/mock.controller";
import { MockService } from "./mock/mock.service";
import { MockModule } from "./mock/mock.module";
import { TodoModule } from "./todo/todo.module";
import { TodoService } from "./todo/todo.service";

@Module({
  imports: [MockModule, TodoModule],
  controllers: [AppController, TodoController, MockController],
  providers: [TodoService, MockService],
})
export class AppModule {}
