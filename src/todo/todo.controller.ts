import { Controller, Get } from "@nestjs/common";
import { IGlasses, ITodos } from "src/common/common.interface";
import { IServiceEndpoint } from "src/common/common.endpoint.interface";
import { TodoService } from "./todo.service";

@Controller("todo")
export class TodoController implements IServiceEndpoint {
  constructor(private readonly todoService: TodoService) {}

  getPlantingGlass(userId: string): Promise<IGlasses> {
    throw new Error("Method not implemented.");
  }
  getTodayTodos(userId: string): Promise<ITodos> {
    throw new Error("Method not implemented.");
  }

  @Get()
  getServiceInfo() {
    return this.todoService.getServiceInfo();
  }
}
