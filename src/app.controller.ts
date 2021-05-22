import { Controller, Get, HttpStatus, Res } from "@nestjs/common";
import { Response } from "express";
import { version } from "../package.json";

@Controller()
export class AppController {
  @Get("ping")
  sendStatusOK(@Res() res: Response): void {
    res.sendStatus(HttpStatus.OK);
  }

  @Get("version")
  getVersion() {
    return version;
  }

  @Get("env")
  getEnv() {
    return process.env;
  }
}
