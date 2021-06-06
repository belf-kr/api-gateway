import { HttpModule, Module, NestModule, RequestMethod, MiddlewareConsumer } from "@nestjs/common";

import { OauthMiddleware } from "./oauth.middleware";

// FIXME: (parkgang) DI 받을 수 있도록 수정되어야 함
import { K8sServiceDNS } from "../common/lib/service";

@Module({
  imports: [
    HttpModule.register({
      // 외부로 노출되어 있는 IP 이지만 일관성 및 네트워크 트랜잭션 최적화를 위해 내부방으로 접근합니다.
      baseURL: K8sServiceDNS("oauth-server", 3000),
    }),
  ],
  providers: [OauthMiddleware],
})
export class MiddlewareModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(OauthMiddleware)
      .exclude({ path: "todo/example-upper", method: RequestMethod.ALL }, { path: "todo/example-lower", method: RequestMethod.ALL })
      .forRoutes({ path: "/*", method: RequestMethod.ALL });
  }
}
