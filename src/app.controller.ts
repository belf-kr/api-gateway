import { Controller, Get, HttpStatus, Res } from "@nestjs/common";
import { AppService } from "./app.service";
import { Response } from "express";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get("ping")
  sendStatusOK(@Res() res: Response): void {
    res.sendStatus(HttpStatus.OK);
  }

  @Get(`/env`)
  getEnv() {
    return process.env;
  }
}
