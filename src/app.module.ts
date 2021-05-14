import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { TodoListsController } from "./todo-lists/todo-lists.controller";
import { TodoListsService } from "./todo-lists/todo-lists.service";
import { TodoListsModule } from "./todo-lists/todo-lists.module";

@Module({
  imports: [TodoListsModule],
  controllers: [AppController, TodoListsController],
  providers: [AppService, TodoListsService],
})
export class AppModule {}
