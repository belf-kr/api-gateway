import { Controller, Get } from "@nestjs/common";

@Controller("todo-lists")
export class TodoListsController {
  @Get()
  public getLists() {
    return {
      title: "투두 리스트 조회",
    };
  }
}
