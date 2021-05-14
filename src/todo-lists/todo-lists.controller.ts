import { Controller, Get } from "@nestjs/common";
import { TodoListsService } from "./todo-lists.service";

@Controller("todo-lists")
export class TodoListsController {
  constructor(private readonly appService: TodoListsService) {}

  @Get()
  public getLists() {
    const res = this.appService.getList();
    return res;
  }
}
