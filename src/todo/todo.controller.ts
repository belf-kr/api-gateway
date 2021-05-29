import { Controller, Get, HttpStatus, Res } from "@nestjs/common";
import { Response } from "express";

import { TodoService } from "./todo.service";

@Controller("todo")
export class TodoController {
  constructor(private readonly appService: TodoService) {}

  @Get()
  async getServiceName(): Promise<string> {
    const result = await this.appService.getServiceName();
    return result;
  }

  // TODO: 추후, 삭제해야함
  @Get("test")
  getTest(): string {
    return "test 완료";
  }

  @Get("ping")
  getPing(@Res() res: Response): void {
    res.sendStatus(HttpStatus.OK);
  }

  @Get("version")
  async getVersion(): Promise<string> {
    const result = await this.appService.getVersion();
    return result;
  }

  @Get("env")
  async getEnv(): Promise<NodeJS.ProcessEnv> {
    const result = await this.appService.getEnv();
    return result;
  }
}
