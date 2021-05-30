import { Controller, Get } from "@nestjs/common";

import { TodoService } from "./todo.service";

@Controller("todo")
export class TodoController {
  private readonly appService;

  constructor(appService: TodoService) {
    this.appService = appService;
  }

  @Get()
  async getServiceName(): Promise<string> {
    try {
      const result = await this.appService.getServiceName();
      return result;
    } catch (error) {
      return error;
    }
  }
  @Get("ping")
  async getPing() {
    try {
      const result = await this.appService.getPing();
      return result;
    } catch (error) {
      return error;
    }
  }
  @Get("version")
  async getVersion(): Promise<string> {
    try {
      const result = await this.appService.getVersion();
      return result;
    } catch (error) {
      return error;
    }
  }
  @Get("env")
  async getEnv(): Promise<NodeJS.ProcessEnv> {
    try {
      const result = await this.appService.getEnv();
      return result;
    } catch (error) {
      return error;
    }
  }

  @Get("today-todos")
  async getTodayTodos() {
    try {
      const result = await this.appService.getTodayTodos();
      return result;
    } catch (error) {
      return error;
    }
  }
  @Get("glass")
  async getGlass() {
    try {
      const result = await this.appService.getGlass();
      return result;
    } catch (error) {
      return error;
    }
  }
}
