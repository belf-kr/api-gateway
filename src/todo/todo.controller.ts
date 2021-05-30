import { Controller, Get, HttpStatus, Res } from "@nestjs/common";
import { Response } from "express";

import { TodoService } from "./todo.service";

@Controller("todo")
export class TodoController {
  private readonly appService;

  constructor(appService: TodoService) {
    this.appService = appService;
  }

  @Get()
  async getServiceName(): Promise<string> {
    const result = await this.appService.getServiceName();
    return result;
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

  @Get("today-todos")
  async getTodayTodos() {
    const result = await this.appService.getTodayTodos();
    return result;
  }
  @Get("glass")
  async getGlass() {
    const result = await this.appService.getGlass();
    return result;
  }
}
