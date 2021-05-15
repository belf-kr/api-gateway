import { Controller, Get, Req, Res } from "@nestjs/common";
import { AppService } from "./app.service";
import { Request, Response } from "express";
import { CCommonManager } from "./common/common.manager";
import { CServerManager } from "./common/common.server-manager";
import { User } from "./common/common.decorator";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  root(@User() user): string {
    return user;
  }

  @Get("ping")
  sendStatusOK(@Req() req: Request, @Res() res: Response): any {
    return res.sendStatus(200);
  }

  @Get("status")
  async getStatus(): Promise<CCommonManager> {
    return CServerManager.getInstance();
  }

  @Get(`/env`)
  getEnv() {
    return process.env;
  }
}
