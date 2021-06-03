import { HttpService, Injectable, NestMiddleware } from "@nestjs/common";
import { NextFunction } from "express";

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
    const result = await this.tokenValid();
    console.log(result);
    next();
  }
}
