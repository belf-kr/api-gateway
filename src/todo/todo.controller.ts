import { Controller, Get } from "@nestjs/common";

@Controller("todo")
export class TodoController {
  @Get()
  getTest1() {
    return "todo";
  }
}
