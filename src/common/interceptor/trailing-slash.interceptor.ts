import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from "@nestjs/common";
import { Observable } from "rxjs";

@Injectable()
// API 요청이 후행 슬래시로 끝나는 경우, 사용자의 요청을 올바른 후행 슬래시가 없는 URL로 라다이렉트
export class TrailingSlashInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const url: string = context.switchToHttp().getRequest().url;

    if (url.substr(-1, 1) === "/") {
      const modifiedUrl = url.substr(0, url.length - 1);
      context.switchToHttp().getRequest().url = modifiedUrl;
    }

    return next.handle();
  }
}
