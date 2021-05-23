import { Controller, Get, Param } from "@nestjs/common";
import { IServiceEndpoint } from "src/common/common.service-interface";
import { IServiceInfo } from "../common/common.interface";
import { MockService } from "./mock.service";

@Controller("mock")
export class MockController implements IServiceEndpoint {
  constructor(private readonly mockService: MockService) {}

  @Get()
  getServiceInfo(): IServiceInfo {
    return this.mockService.getServiceInfo();
  }

  @Get(":userId/glass")
  getPlantingGlass(@Param("userId") userId: string) {
    return this.mockService.getPlantingGlass(userId);
  }

  @Get(":userId/today-todos")
  getTodayTodos(@Param("userId") userId: string) {
    return this.mockService.getTodayTodos(userId);
  }
}
