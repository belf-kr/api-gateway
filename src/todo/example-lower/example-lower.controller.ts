import { Body, Controller, Delete, Get, HttpException, HttpStatus, Post, Put } from "@nestjs/common";

import { ExampleLowerService } from "./example-lower.service";

import { getErrorMessage, getErrorHttpStatusCode } from "../../common/lib/error";

import { ExampleLower, PutExampleLower } from "./example-lower.type";

@Controller("todo/example-lower")
export class ExampleLowerController {
  private readonly appService;

  constructor(appService: ExampleLowerService) {
    this.appService = appService;
  }

  @Post()
  async postExampleLower(@Body() body: ExampleLower[]): Promise<HttpStatus> {
    try {
      const result = await this.appService.postExampleLower(body);
      return result;
    } catch (error) {
      const httpStatusCode = getErrorHttpStatusCode(error);
      const message = getErrorMessage(error);
      throw new HttpException(message, httpStatusCode);
    }
  }
  @Get()
  async getExampleLower(@Body() body: ExampleLower[]): Promise<HttpStatus> {
    try {
      const result = await this.appService.getExampleLower(body);
      return result;
    } catch (error) {
      const httpStatusCode = getErrorHttpStatusCode(error);
      const message = getErrorMessage(error);
      throw new HttpException(message, httpStatusCode);
    }
  }
  @Put()
  async putExampleLower(@Body() body: PutExampleLower): Promise<HttpStatus> {
    try {
      const result = await this.appService.putExampleLower(body);
      return result;
    } catch (error) {
      const httpStatusCode = getErrorHttpStatusCode(error);
      const message = getErrorMessage(error);
      throw new HttpException(message, httpStatusCode);
    }
  }
  @Delete()
  async deleteExampleLower(@Body() body: ExampleLower[]): Promise<HttpStatus> {
    try {
      const result = await this.appService.deleteExampleLower(body);
      return result;
    } catch (error) {
      const httpStatusCode = getErrorHttpStatusCode(error);
      const message = getErrorMessage(error);
      throw new HttpException(message, httpStatusCode);
    }
  }
}
