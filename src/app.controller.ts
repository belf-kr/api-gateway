import { Controller, Get } from "@nestjs/common";

import { AppService } from "./app.service";

@Controller()
export class AppController {
  private readonly appService: AppService;

  constructor(appService: AppService) {
    this.appService = appService;
  }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get("ping")
  getPing(): void {
    return;
  }

  @Get("version")
  getVersion(): string {
    return this.appService.getVersion();
  }

  @Get("env")
  getEnv(): NodeJS.ProcessEnv {
    return this.appService.getEnv();
  }
}
