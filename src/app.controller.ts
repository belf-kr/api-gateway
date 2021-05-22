import { Controller, Get, HttpStatus, Res } from "@nestjs/common";
import { Response } from "express";

@Controller()
export class AppController {
  @Get("ping")
  sendStatusOK(@Res() res: Response): void {
    res.sendStatus(HttpStatus.OK);
  }
  @Get("env")
  getEnv() {
    return process.env;
  }
}
