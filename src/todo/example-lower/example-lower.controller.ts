import { Body, Controller, Delete, Get, HttpException, HttpStatus, Post, Put } from "@nestjs/common";

import { ExampleLowerService } from "./example-lower.service";
import { ExampleLower, PutExampleLower } from "./example-lower.type";

import { getErrorMessage, getErrorHttpStatusCode } from "../../common/lib/error";

@Controller("todo/example-lower")
export class ExampleLowerController {
  private readonly appService: ExampleLowerService;

  constructor(appService: ExampleLowerService) {
    this.appService = appService;
  }

  @Post()
  async postExampleLower(@Body() body: ExampleLower[]): Promise<HttpStatus> {
    let serviceResult: any;

    try {
      serviceResult = await this.appService.postExampleLower(body);
    } catch (error) {
      const httpStatusCode = getErrorHttpStatusCode(error);
      const message = getErrorMessage(error);

      throw new HttpException(message, httpStatusCode);
    }

    return serviceResult;
  }
  @Get()
  async getExampleLower(@Body() body: ExampleLower[]): Promise<HttpStatus> {
    let serviceResult: any;

    try {
      serviceResult = await this.appService.getExampleLower(body);
    } catch (error) {
      const httpStatusCode = getErrorHttpStatusCode(error);
      const message = getErrorMessage(error);

      throw new HttpException(message, httpStatusCode);
    }

    return serviceResult;
  }
  @Put()
  async putExampleLower(@Body() body: PutExampleLower): Promise<HttpStatus> {
    let serviceResult: any;

    try {
      serviceResult = await this.appService.putExampleLower(body);
    } catch (error) {
      const httpStatusCode = getErrorHttpStatusCode(error);
      const message = getErrorMessage(error);

      throw new HttpException(message, httpStatusCode);
    }

    return serviceResult;
  }

  @Delete()
  async deleteExampleLower(@Body() body: ExampleLower[]): Promise<HttpStatus> {
    let serviceResult: any;

    try {
      serviceResult = await this.appService.deleteExampleLower(body);
    } catch (error) {
      const httpStatusCode = getErrorHttpStatusCode(error);
      const message = getErrorMessage(error);

      throw new HttpException(message, httpStatusCode);
    }

    return serviceResult;
  }
}
