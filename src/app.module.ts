import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";

import { TodoListsModule } from "./todo-lists/todo-lists.module";

@Module({
  imports: [TodoListsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
