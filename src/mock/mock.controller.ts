import { Controller, Get, HttpException } from "@nestjs/common";

import { MockService } from "./mock.service";

import { getErrorHttpStatusCode, getErrorMessage } from "src/common/lib/error";

@Controller("mock")
export class MockController {
  private readonly appService: MockService;

  constructor(appService: MockService) {
    this.appService = appService;
  }

  @Get()
  async getServiceName(): Promise<string> {
    let serviceResult: any;

    try {
      serviceResult = await this.appService.getServiceName();
    } catch (error) {
      const httpStatusCode = getErrorHttpStatusCode(error);
      const message = getErrorMessage(error);

      throw new HttpException(message, httpStatusCode);
    }

    return serviceResult;
  }

  @Get("ping")
  async getPing() {
    let serviceResult: any;

    try {
      serviceResult = await this.appService.getPing();
    } catch (error) {
      const httpStatusCode = getErrorHttpStatusCode(error);
      const message = getErrorMessage(error);

      throw new HttpException(message, httpStatusCode);
    }

    return serviceResult;
  }

  @Get("version")
  async getVersion(): Promise<string> {
    let serviceResult: any;

    try {
      serviceResult = await this.appService.getVersion();
    } catch (error) {
      const httpStatusCode = getErrorHttpStatusCode(error);
      const message = getErrorMessage(error);

      throw new HttpException(message, httpStatusCode);
    }

    return serviceResult;
  }

  @Get("env")
  async getEnv(): Promise<NodeJS.ProcessEnv> {
    let serviceResult: any;

    try {
      serviceResult = await this.appService.getEnv();
    } catch (error) {
      const httpStatusCode = getErrorHttpStatusCode(error);
      const message = getErrorMessage(error);

      throw new HttpException(message, httpStatusCode);
    }

    return serviceResult;
  }

  @Get("today-todos")
  async getTodayTodos() {
    let serviceResult: any;

    try {
      serviceResult = await this.appService.getTodayTodos();
    } catch (error) {
      const httpStatusCode = getErrorHttpStatusCode(error);
      const message = getErrorMessage(error);

      throw new HttpException(message, httpStatusCode);
    }

    return serviceResult;
  }

  @Get("glass")
  async getGlass() {
    let serviceResult: any;

    try {
      serviceResult = await this.appService.getGlass();
    } catch (error) {
      const httpStatusCode = getErrorHttpStatusCode(error);
      const message = getErrorMessage(error);

      throw new HttpException(message, httpStatusCode);
    }

    return serviceResult;
  }
}
