import { Controller, Get } from "@nestjs/common";

import { TodoListsService } from "./todo-lists.service";

@Controller("todo-lists")
export class TodoListsController {
  constructor(private readonly appService: TodoListsService) {}

  @Get("/todo-service")
  public getServiceLists() {
    const res = this.appService.getList(`todo-service`);
    return res;
  }

  @Get("/mock-service")
  public getMockLists() {
    const res = this.appService.getList(`todo-service`);
    return res;
  }
}
