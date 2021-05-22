import { Controller, Get } from "@nestjs/common";
import { ServiceInfo } from "../common/common.interface";
import { MockService } from "./mock.service";

@Controller("mock")
export class MockController {
  constructor(private readonly mockService: MockService) {}

  @Get()
  GetServiceInfo(): ServiceInfo {
    return this.mockService.GetServiceInfo();
  }
}
