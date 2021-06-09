import { HttpModule, Module, NestModule, RequestMethod, MiddlewareConsumer } from "@nestjs/common";
import { ConfigModule, ConfigService } from "@nestjs/config";

import { OauthMiddleware } from "./oauth.middleware";

import { K8sServiceDNS } from "../common/lib/service";

@Module({
  imports: [
    HttpModule.registerAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        baseURL: K8sServiceDNS("oauth-service", configService.get("OAUTH_SERVER_PORT")),
      }),
      inject: [ConfigService],
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
