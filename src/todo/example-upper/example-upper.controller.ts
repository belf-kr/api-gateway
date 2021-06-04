import { Body, Controller, Get, HttpException, HttpStatus, Post, Put } from "@nestjs/common";

import { ExampleUpperService } from "./example-upper.service";

import { getErrorMessage, getErrorHttpStatusCode } from "../../common/lib/error";

import { ExampleUpper, PutExampleUpper } from "./example-upper.type";

@Controller("todo/example-upper")
export class ExampleUpperController {
  private readonly appService;

  constructor(appService: ExampleUpperService) {
    this.appService = appService;
  }

  @Post()
  async postExampleUpper(@Body() body: ExampleUpper[]): Promise<HttpStatus> {
    try {
      const result = await this.appService.postExampleUpper(body);
      return result;
    } catch (error) {
      const httpStatusCode = getErrorHttpStatusCode(error);
      const message = getErrorMessage(error);
      throw new HttpException(message, httpStatusCode);
    }
  }
  @Get()
  async getExampleUpper(@Body() body: ExampleUpper[]): Promise<HttpStatus> {
    try {
      const result = await this.appService.getExampleUpper(body);
      return result;
    } catch (error) {
      const httpStatusCode = getErrorHttpStatusCode(error);
      const message = getErrorMessage(error);
      throw new HttpException(message, httpStatusCode);
    }
  }
  @Put()
  async putExampleUpper(@Body() body: PutExampleUpper): Promise<HttpStatus> {
    try {
      const result = await this.appService.putExampleUpper(body);
      return result;
    } catch (error) {
      const httpStatusCode = getErrorHttpStatusCode(error);
      const message = getErrorMessage(error);
      throw new HttpException(message, httpStatusCode);
    }
  }
}
