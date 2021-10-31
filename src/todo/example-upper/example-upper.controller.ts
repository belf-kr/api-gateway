import { Body, Controller, Delete, Get, HttpException, HttpStatus, Post, Put } from "@nestjs/common";

import { ExampleUpperService } from "./example-upper.service";

import { ExampleUpper, PutExampleUpper } from "./example-upper.type";

import { getErrorMessage, getErrorHttpStatusCode } from "../../common/lib/error";

@Controller("todo/example-upper")
export class ExampleUpperController {
  private readonly appService: ExampleUpperService;

  constructor(appService: ExampleUpperService) {
    this.appService = appService;
  }

  @Post()
  async postExampleUpper(@Body() body: ExampleUpper[]): Promise<HttpStatus> {
    let serviceResult: any;

    try {
      serviceResult = await this.appService.postExampleUpper(body);
    } catch (error) {
      const httpStatusCode = getErrorHttpStatusCode(error);
      const message = getErrorMessage(error);

      throw new HttpException(message, httpStatusCode);
    }

    return serviceResult;
  }

  @Get()
  async getExampleUpper(@Body() body: ExampleUpper[]): Promise<HttpStatus> {
    let serviceResult: any;

    try {
      serviceResult = await this.appService.getExampleUpper(body);
    } catch (error) {
      const httpStatusCode = getErrorHttpStatusCode(error);
      const message = getErrorMessage(error);

      throw new HttpException(message, httpStatusCode);
    }

    return serviceResult;
  }

  @Put()
  async putExampleUpper(@Body() body: PutExampleUpper): Promise<HttpStatus> {
    let serviceResult: any;

    try {
      serviceResult = await this.appService.putExampleUpper(body);
    } catch (error) {
      const httpStatusCode = getErrorHttpStatusCode(error);
      const message = getErrorMessage(error);

      throw new HttpException(message, httpStatusCode);
    }

    return serviceResult;
  }

  @Delete()
  async deleteExampleUpper(@Body() body: ExampleUpper[]): Promise<HttpStatus> {
    let serviceResult: any;

    try {
      serviceResult = await this.appService.deleteExampleUpper(body);
    } catch (error) {
      const httpStatusCode = getErrorHttpStatusCode(error);
      const message = getErrorMessage(error);

      throw new HttpException(message, httpStatusCode);
    }

    return serviceResult;
  }
}
