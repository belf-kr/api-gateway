import { HttpModule, Module, NestModule, RequestMethod, MiddlewareConsumer } from "@nestjs/common";
import { ConfigModule, ConfigService } from "@nestjs/config";

import * as Joi from "joi";

import { OauthMiddleware } from "./oauth.middleware";

import { K8sServiceDNS } from "../common/lib/service";

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: false,
      // prod 환경의 환경변수는 모두 k8s가 컨트롤
      ignoreEnvFile: process.env.NODE_ENV === "production",
      envFilePath: process.env.NODE_ENV === "development" ? ".env.dev" : "",
      validationSchema: Joi.object({
        OAUTH_SERVER_PORT: Joi.number().default(3000),
      }),
    }),
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
