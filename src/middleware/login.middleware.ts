import { Injectable, NestMiddleware } from "@nestjs/common";
@Injectable()
export class LoginRequire implements NestMiddleware {
  async use(request: Request, response: Response, next: () => void): Promise<any> {
    next();
  }
}
