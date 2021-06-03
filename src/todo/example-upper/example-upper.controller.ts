import { Controller, Get, HttpException } from "@nestjs/common";

import { ExampleUpperService } from "./example-upper.service";

import { getErrorMessage, getErrorHttpStatusCode } from "../../common/lib/error";

@Controller("todo/example-upper")
export class ExampleUpperController {
  private readonly appService;

  constructor(appService: ExampleUpperService) {
    this.appService = appService;
  }

  @Get()
  async getExampleUpper() {
    try {
      const result = await this.appService.getExampleUpper();
      return result;
    } catch (error) {
      const httpStatusCode = getErrorHttpStatusCode(error);
      const message = getErrorMessage(error);
      throw new HttpException(message, httpStatusCode);
    }
  }
}
