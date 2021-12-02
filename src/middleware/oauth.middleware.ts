import { HttpException, HttpService, HttpStatus, Injectable, NestMiddleware } from "@nestjs/common";
import { AxiosRequestConfig } from "axios";
import { NextFunction } from "express";

import { getErrorHttpStatusCode, getErrorMessage } from "../common/lib/error";

@Injectable()
export class OauthMiddleware implements NestMiddleware {
  constructor(private readonly httpService: HttpService) {}

  async validJWT(jwtInput: string) {
    let requestConfig: AxiosRequestConfig;

    if (jwtInput) {
      requestConfig = {
        headers: {
          Authorization: `${jwtInput}`,
        },
      };
    }

    try {
      if (!requestConfig) {
        throw new HttpException({ data: "검증을 위한 JWT 값이 입력되지 않았습니다.", status: HttpStatus.UNAUTHORIZED }, HttpStatus.UNAUTHORIZED);
      }

      await this.httpService.get("/api/users/token/valid", requestConfig).toPromise();
    } catch (error) {
      throw error;
    }
  }

  async use(req: Request, res: Response, next: NextFunction) {
    console.log(`OauthMiddleware`);

    try {
      const jwtInput = req.headers["authorization"];

      await this.validJWT(jwtInput);
    } catch (error) {
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
