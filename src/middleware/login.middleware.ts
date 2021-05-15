import { HttpException, HttpService, HttpStatus, Injectable, NestMiddleware } from "@nestjs/common";

@Injectable()
export class LoginRequire implements NestMiddleware {
  async use(request: Request, response: Response, next: () => void): Promise<any> {
    const authorization = request.headers["Authorization"];
    if (authorization && process.env.STAGES) {
      const http = new HttpService();
      // TODO 로그인 유효성 검사 로직이 추가되어야함.
      const res = await http.get(`http://www.google.com/`).toPromise();
      console.log(res.data);
      next();
    } else {
      throw new HttpException("Forbidden", HttpStatus.FORBIDDEN);
    }
  }
}
