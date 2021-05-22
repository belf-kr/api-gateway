import { Controller, Get, Param } from "@nestjs/common";
import { IServiceInfo } from "../common/common.interface";
import { MockService } from "./mock.service";

@Controller("mock")
export class MockController {
  constructor(private readonly mockService: MockService) {}

  @Get()
  getServiceInfo(): IServiceInfo {
    return this.mockService.getServiceInfo();
  }

  @Get(":userId/glass")
  getPlantingGlass(@Param() param) {
    return this.mockService.getPlantingGlass(param.userId);
  }

  @Get(":userId/today-todos")
  getTodayTodos(@Param() param) {
    return this.mockService.getTodayTodos(param.userId);
  }
}
