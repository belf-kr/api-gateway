import { Body, Controller, Get, HttpException, HttpStatus, Post } from "@nestjs/common";

import { ExampleUpperService } from "./example-upper.service";

import { getErrorMessage, getErrorHttpStatusCode } from "../../common/lib/error";

import { ExampleUpper } from "./example-upper.type";

@Controller("todo/example-upper")
export class ExampleUpperController {
  private readonly appService;

  constructor(appService: ExampleUpperService) {
    this.appService = appService;
  }

  @Post()
  async postExampleUpper(@Body() exampleUppers: ExampleUpper[]): Promise<HttpStatus> {
    try {
      const result = await this.appService.postExampleUpper(exampleUppers);
      return result;
    } catch (error) {
      const httpStatusCode = getErrorHttpStatusCode(error);
      const message = getErrorMessage(error);
      throw new HttpException(message, httpStatusCode);
    }
  }

  @Get()
  async getExampleUpper(@Body() exampleUppers: ExampleUpper[]): Promise<HttpStatus> {
    try {
      const result = await this.appService.getExampleUpper(exampleUppers);
      return result;
    } catch (error) {
      const httpStatusCode = getErrorHttpStatusCode(error);
      const message = getErrorMessage(error);
      throw new HttpException(message, httpStatusCode);
    }
  }
}
