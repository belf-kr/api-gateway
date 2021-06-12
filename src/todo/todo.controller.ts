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
  async getTodayTodos(@Res() res: Response) {
    try {
      const result = await this.appService.getTodayTodos();
      res.status(HttpStatus.OK).send(result);
    } catch (error) {
      res.status(HttpStatus.INTERNAL_SERVER_ERROR).send(error);
    }
  }

  @Get("glass")
  async getGlass(@Res() res: Response) {
    try {
      const result = await this.appService.getGlass();
      res.status(HttpStatus.OK).send(result);
    } catch (error) {
      res.status(HttpStatus.INTERNAL_SERVER_ERROR).send(error);
    }
  }

  @Get("get-all-colors")
  async getAllColors(@Res() res: Response) {
    try {
      const result = await this.appService.getAllColors();
      res.status(HttpStatus.OK).send(result);
    } catch (error) {
      res.status(HttpStatus.INTERNAL_SERVER_ERROR).send(error);
    }
  }
}
