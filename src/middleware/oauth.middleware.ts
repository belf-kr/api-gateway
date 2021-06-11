import { HttpException, HttpService, Injectable, NestMiddleware } from "@nestjs/common";
import { NextFunction } from "express";

import { getErrorHttpStatusCode, getErrorMessage } from "../common/lib/error";

@Injectable()
export class OauthMiddleware implements NestMiddleware {
  private readonly httpService: HttpService;

  constructor(httpService: HttpService) {
    this.httpService = httpService;
  }

  async tokenValid() {
    try {
      const res = await this.httpService.get("/token/valid").toPromise();
      return res.data;
    } catch (error) {
      throw error;
    }
  }

  async use(req: Request, res: Response, next: NextFunction) {
    console.log(`OauthMiddleware`);
    try {
      const result = await this.tokenValid();
      console.log(result);
    } catch (error) {
      // FIXME: (ruddms936@naver.com) 에러 처리가 확실하지 않음: (node:22117) UnhandledPromiseRejectionWarning: RangeError: Maximum call stack size exceeded
      const httpStatusCode = getErrorHttpStatusCode(error);
      const message = getErrorMessage(error);
      const errorRes = {
        point: "OauthMiddleware",
        message,
      };
      throw new HttpException(errorRes, httpStatusCode);
    }
    next();
  }
}
