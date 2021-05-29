import { Controller, Get } from "@nestjs/common";

import { TestService } from "./test.service";

@Controller("todo/test")
export class TestController {
  constructor(private readonly appService: TestService) {}

  @Get()
  getHello() {
    return "todo/test";
  }

  @Get("version")
  getVersion() {
    const res = this.appService.getVersion();
    return res;
  }

  @Get("env")
  getEnv() {
    const res = this.appService.getEnv();
    return res;
  }
}
