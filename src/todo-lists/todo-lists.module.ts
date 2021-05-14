import { Module, HttpModule } from "@nestjs/common";

import { TodoListsController } from "./todo-lists.controller";
import { TodoListsService } from "./todo-lists.service";

@Module({
  imports: [HttpModule],
  controllers: [TodoListsController],
  providers: [TodoListsService],
})
export class TodoListsModule {}
