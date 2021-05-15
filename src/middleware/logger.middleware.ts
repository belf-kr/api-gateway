import { Injectable, NestMiddleware } from "@nestjs/common";

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  async use(request: Request, response: Response, next: () => void): Promise<any> {
    console.log(`${new Date().toISOString()} - ${request.method} - ${request.url}`);
    next();
  }
}
